"use client";

import { BaseError } from "viem";
import {
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";
import { mintContractConfig } from "./contracts";
import { useAccount } from "wagmi";
import Image from "next/image";
import corgo from "../../public/img/corgo.png";
import { ConnectKitButton } from "connectkit";

export function WriteContract() {
  const { address, isConnected } = useAccount();
  const { data: tokenId } = useContractRead({
    ...mintContractConfig,
    functionName: "currentTokenId",
  });

  const currentTokenId = tokenId?.toString() as string;

  const { write, data, error, isLoading, isError } = useContractWrite({
    address: mintContractConfig.address,
    functionName: "mint",
    value: BigInt(0.01 * 10 ** 18), // If you did a different value, change it here!
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "payable",
        type: "function",
      },
    ],
  });
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });

  return (
    <div className="grid text-center justify-center border-gray-600 border-opacity-10 shadow-xl border h-fit w-fit p-10 dark:border-gray-500 rounded-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          write({
            args: [address as `0x${string}`, BigInt(currentTokenId)],
          });
        }}
        className="place-items-center justify-self-center grid gap-y-8"
      >
        <p>Mint Token #{currentTokenId}</p>
        <Image
          src={corgo}
          width={200}
          height={200}
          alt="Cute Corgi"
          className="rounded-xl"
        />
        {isConnected ? (
          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-sm btn-accent"
          >
            Mint Cute Corgi
          </button>
        ) : (
          <ConnectKitButton />
        )}
      </form>
      <div className="mt-4 justify-self-center">
        {isLoading && <div className="badge badge-info">Check wallet...</div>}
        {isPending && (
          <div className="badge badge-info">Transaction pending...</div>
        )}
        {isSuccess && (
          <div className="badge badge-success">
            <div>Transaction Hash: {data?.hash}</div>
          </div>
        )}
        {isError && (
          <div className="badge badge-error">
            {(error as BaseError)?.shortMessage}
          </div>
        )}
      </div>
    </div>
  );
}
