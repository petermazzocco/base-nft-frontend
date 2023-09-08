This is the front end for the tutorial on how to create an ERC721 contract using Foundry and deploying on Base Goerli

View Tutorial:

## Getting Started

Please clone this repo by running the following command:

```bash
git clone "https://github.com/petermazzocco/base-nft-frontend.git"
```

After cloning, install packages

```bash
npm install
# or
yarn install
# or
pnpm install
```

After install, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Values To Change

Navigate to the /components folder, and open the contracts.ts file.
Enter your deployed contract address in the proper field.

If you had changed the value of the mint in the smart contract, head
to the WriteContract.tsx component and change the value to what ever
you decided to be the value.
