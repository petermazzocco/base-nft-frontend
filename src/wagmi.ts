import { getDefaultConfig } from "connectkit";
import { createConfig, configureChains } from "wagmi";
import { baseGoerli } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const walletConnectProjectId = "2ac5e32190de3db71e09ea51bd1d25e2";

const { chains } = configureChains(
  [baseGoerli],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: `https://base-goerli.public.blastapi.io`,
      }),
    }),
  ]
);

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "Cute Corgis Minting App",
    walletConnectProjectId,
    chains,
  })
);
