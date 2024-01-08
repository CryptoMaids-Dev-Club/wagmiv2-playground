"use client";

import { useTransfer } from "@/app/useTransfer";
import {
  useReadErc20BalanceOf,
  useSimulateErc20Transfer,
  useWriteErc20Transfer,
} from "@/generated";
import { config } from "@/wagmi";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";
import { Address, formatEther, parseEther } from "viem";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
  useWriteContract,
} from "wagmi";

function App() {
  const queryClient = useQueryClient();

  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const { queryKey, data: maidsBalance } = useReadErc20BalanceOf({
    address: "0x3cc3E7DFa0CC1d188bf3c6F40C98c7dE466f11D6",
    chainId: 11155111,
    args: [account.address ?? "0x"],
    query: {
      staleTime: Infinity,
      select: (data) => formatEther(data),
    },
  });

  const { transfer, isPending, error: writeError, fetchStatus } = useTransfer();

  const { chains, switchChain } = useSwitchChain({ config });

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>

      <div>
        <h2>Maids Balance</h2>
        <div>{maidsBalance}</div>
      </div>

      <div>
        <h2>Maids Transfer</h2>
        <button onClick={() => transfer()} type="button">
          Send
        </button>
        <div>{fetchStatus}</div>
        <div>{isPending ? "Pending" : ""}</div>
        <div>{writeError?.message}</div>
      </div>

      <div>
        <h2>Invalidate</h2>
        <button
          onClick={() => queryClient.invalidateQueries({ queryKey })}
          type="button"
        >
          Invalidate
        </button>
      </div>

      <div>
        <h2>Switch Chain</h2>
        {chains.map((chain) => (
          <button
            key={chain.id}
            onClick={() =>
              switchChain(
                {
                  chainId: chain.id,
                },
                {
                  onSuccess: () => {
                    console.log("onSuccess");
                  },
                  onError: (error) => {
                    console.log(error);
                  },
                  onSettled: () => {
                    console.log("onSettled");
                  },
                }
              )
            }
            type="button"
          >
            {chain.name}
          </button>
        ))}
      </div>

      <Link href="/next">Move to Next</Link>
    </>
  );
}

export default App;
