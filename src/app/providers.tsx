"use client";

import { ConnectKitProvider } from "connectkit";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ThemeProvider } from "next-themes";

import { config } from "../wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ThemeProvider>{mounted && children}</ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
