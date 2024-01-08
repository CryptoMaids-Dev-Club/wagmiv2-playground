"use client";

import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { deserialize, serialize } from "wagmi";

import { ReactNode } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function tanstackQuery(props: { children: ReactNode }) {
  // 2. Create a new Query Client with a default `gcTime`.
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  // 3. Set up the persister.
  const persister = createSyncStoragePersister({
    serialize,
    storage: window ? window.localStorage : undefined,
    deserialize,
  });

  // When using devtool, "Do not know how to serialize a BigInt" error occur.
  //   return (
  //     <PersistQueryClientProvider
  //       client={queryClient}
  //       persistOptions={{ persister }}
  //     >
  //       {props.children}
  //       <ReactQueryDevtools initialIsOpen={true} />
  //     </PersistQueryClientProvider>
  //   );
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
