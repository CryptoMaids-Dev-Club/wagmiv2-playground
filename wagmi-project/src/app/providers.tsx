"use client";

import { State, WagmiProvider } from "wagmi";

import { config } from "@/wagmi";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

export function Providers(props: { children: ReactNode }) {
  const TanstackQueryProvider = dynamic(() => import("./tanstack-query"), {
    ssr: false,
  });

  return (
    <WagmiProvider config={config}>
      <TanstackQueryProvider>{props.children}</TanstackQueryProvider>
    </WagmiProvider>
  );
}
