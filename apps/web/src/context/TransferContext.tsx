import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from 'ethereum-multicall';
import { useAccount, useBlockNumber, useNetwork, useProvider } from 'wagmi';
import { getCalls } from '../utils/multicall';
import { BigNumber } from 'ethers';
import { OnChainTransferItem, Token, TransferPart } from 'shared-config';
import { Swosh__factory } from 'web3-config';
import { useAddress } from 'wagmi-lfg';

export const transferContext = createContext<TransferContext>(null);

type TransferContext = {
  items: OnChainTransferItem[];
};

type Props = { parts: TransferPart[]; chainId: number };

export const TransferContextProvider = ({
  children,
  parts,
  chainId,
}: PropsWithChildren<Props>) => {
  const { address } = useAccount();
  const holdings = parts.map((holding) => ({
    type: holding.type,
    contract_address: holding.contractAddress,
    token_id: holding.tokenId,
    balance: BigNumber.from('0'),
    uniqBy: holding.contractAddress + holding.tokenId,
    tokenURI: undefined,
  })) as any as Token[];
  const swoshAddress = useAddress(Swosh__factory, chainId) as string;

  const calls = getCalls(holdings, { user: address, swoshAddress });
  const provider = useProvider();
  const { chain } = useNetwork();
  const multicall = useMemo(
    () =>
      new Multicall({
        ethersProvider: provider,
        tryAggregate: true,
      }),
    [provider, chainId]
  );
  const [items, setItems] = useState<OnChainTransferItem[]>([]);
  console.log(items);
  const fetchMulticall = async () => {
    const finalState = {};

    try {
      const { results } = await multicall.call(calls);
      for (const key in results) {
        finalState[key] = {};
        for (let value of results[key].callsReturnContext) {
          if (value.success) {
            const reference = value.reference;
            const res = value.returnValues[0];
            finalState[key][reference] = res;
          }
        }
      }
    } catch (e) {
      console.error('fetchMulticall error: ', e);
    }

    const items = [];
    for (let key in finalState) {
      const match = holdings.find((holding) => holding.uniqBy === key);
      const val = finalState[key];
      let symbol, name, decimals, tokenURI, allowance;

      if (match) {
        let balance = match.balance;

        try {
          if (match.type === 'erc1155') {
            balance = BigNumber.from(val.balanceOf).toNumber();
            tokenURI = val.tokenURI;
          } else if (match.type === 'erc721') {
            tokenURI = val.tokenURI;
            name = val.name;
            symbol = val.symbol;
            balance =
              val.ownerOf?.toLowerCase() === address?.toLowerCase() ? 1 : 0;
          } else if (match.type === 'erc20') {
            balance = BigNumber.from(val.balanceOf).toString();
            symbol = val.symbol;
            name = val.name;
            decimals = val.decimals;
            allowance = BigNumber.from(val.allowance);
          }
        } catch (e) {
          console.error(e);
        }
        items.push({
          ...match,
          balance,
          symbol,
          name,
          decimals,
          allowance,
        });
      }
    }
    setItems(items);
  };

  useEffect(() => {
    fetchMulticall();
  }, []);

  return (
    <transferContext.Provider value={{ items }}>
      {children}
    </transferContext.Provider>
  );
};

export const useTransferContext = () => useContext(transferContext);
