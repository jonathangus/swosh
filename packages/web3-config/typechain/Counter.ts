/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CounterInterface extends utils.Interface {
  functions: {
    "currentTimestamp()": FunctionFragment;
    "getCount(address)": FunctionFragment;
    "hello()": FunctionFragment;
    "incrementCounter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "currentTimestamp"
      | "currentTimestamp()"
      | "getCount"
      | "getCount(address)"
      | "hello"
      | "hello()"
      | "incrementCounter"
      | "incrementCounter()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "currentTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentTimestamp()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCount(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "hello", values?: undefined): string;
  encodeFunctionData(functionFragment: "hello()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incrementCounter()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentTimestamp()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCount(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hello", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hello()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementCounter()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Counter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    currentTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getCount(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hello(overrides?: CallOverrides): Promise<[string]>;

    "hello()"(overrides?: CallOverrides): Promise<[string]>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "incrementCounter()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  currentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "currentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCount(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCount(address)"(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hello(overrides?: CallOverrides): Promise<string>;

  "hello()"(overrides?: CallOverrides): Promise<string>;

  incrementCounter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "incrementCounter()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    currentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "currentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCount(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hello(overrides?: CallOverrides): Promise<string>;

    "hello()"(overrides?: CallOverrides): Promise<string>;

    incrementCounter(overrides?: CallOverrides): Promise<void>;

    "incrementCounter()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    currentTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "currentTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCount(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hello(overrides?: CallOverrides): Promise<BigNumber>;

    "hello()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "incrementCounter()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    currentTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCount(address)"(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hello(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hello()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "incrementCounter()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
