import { useSimulateErc20Transfer } from "@/generated";
import { useEffect } from "react";
import { Address, parseEther } from "viem";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

export const useTransfer = () => {
  const { address } = useAccount();
  const { data, error } = useSimulateErc20Transfer({
    address: "0x3cc3E7DFa0CC1d188bf3c6F40C98c7dE466f11D6",
    chainId: 11155111,
    args: [
      "0x12Cfb7E1Cf4fcCBdcA0dCE58F34e1c0AFDA23FCd" as Address,
      parseEther("1"),
    ],
    query: {
      enabled: !!address,
      staleTime: 1000 * 60 * 60 * 24,
    },
  });
  const { data: writeData, writeContract, isPending } = useWriteContract(); // isPending: Walletのポップアップ→ユーザのクリックまで
  const { isLoading, fetchStatus, status } = useWaitForTransactionReceipt({
    // isLoading: ユーザのクリック→トランザクションの完了まで
    hash: writeData,
  });

  useEffect(() => {
    if (status === "success") {
      // トランザクションの完了後に実行される
      console.log("useEffect: success");
    }
  }, [status]);

  if (!data) return { transfer: () => {}, error };
  return {
    transfer: () => writeContract(data.request),
    isPending: isPending || isLoading,
    fetchStatus,
    error,
  };
};
