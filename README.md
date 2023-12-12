# Arbitrage-Bot

Welcome to the `Arbitrage-Bot` repository, where we aim to demystify basic arbitrage strategies and empower aspiring blockchain developers to experience the world of arbitrage. We provide comprehensive code documentation and step-by-step instructions to make learning accessible, allowing developers to grasp the concepts and eventually craft their own effective strategies.

## Table of Contents

- [What is Arbitrage?](#what-is-arbitrage)
- [Why Blockchain Arbitrage?](#why-blockchain-arbitrage)
- [Verification and Security](#verification-and-security)
- [Commented Code](#commented-code)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
- [Create and Setup .env File](#create-and-setup-env-file)
- [Set Deployment Environment](#set-deployment-environment)
- [Launch Hardhat Node](#launch-hardhat-node)
- [Deploy Trading Contract](#deploy-trading-contract)
- [Start the Trading Bot](#start-the-trading-bot)
- [Trigger the Arbitrage ](#trigger-the-arbitrage )
- [Additional Information](#additional-information)
- [Strategy Overview](#strategy-overview)
- [Deploying Trading Bot on Mainnet](#deploying-trading-bot-on-mainnet)
- [Contributions](#contributions)
- [License](#license)
- [Project Updates](#project-updates)
- [Donations](#donations)

## What is Arbitrage?

Arbitrage is a trading strategy that capitalizes on price differences for the same asset across different markets. It involves buying low on one market and selling high on another to turn a profit.

## Why Blockchain Arbitrage?

Blockchain arbitrage presents developers with an opportunity to benefit financially, enhance their skill set, and promote market efficiency. It enables the exploitation of price differences, fosters a deeper understanding of blockchain technology, and contributes to fair market practices. When integrated into diversified trading strategies, it facilitates risk management and automation, occasionally enhancing market liquidity.

## Verification and Security

Every modification to this project undergoes a rigorous verification process, accompanied by digital signing. This stringent approach guarantees the authenticity and integrity of our codebase. If you encounter any modifications lacking adequate verification, we strongly discourage their use, as they may contain malicious code.

## Commented Code

Our codebase is meticulously documented with comprehensive comments, providing clarity on the functionality of individual components.

## Getting Started

### Clone the Repository

Clone this repository to your local machine.

```bash
git clone https://github.com/Innovation-Web-3-0-Blockchain/Arbitrage-Bot.git
```

### Install Dependencies

Ensure you have `node.js` and `npm` installed in your environment. Install the necessary dependencies by running the following command in your terminal:

```bash
npm install
```

## Create and Setup .env File

Before deploying the `Arbitrage.sol` contract, create a **.env** file with the following components:

```env
ARB_FOR=""             // Insert the Token0 address between the quotation marks
ARB_AGAINST=""         // Insert the Token1 address between the quotation marks 
PRICE_DIFFERENCE=""    // Replace the quotation marks with the price difference between the 2 DEXs 
UNITS=""               // Replace the quotation marks with the price reported
GAS_LIMIT=""           // Replace the quotation marks with the desired maximum gas limit
GAS_PRICE=""           // Replace the quotation marks with the desired gwei price
```

For an example of what the **.env** file should look like, please see our [Arbitrage Bot Project Documentations](./Arbitrage-Bot-Project-Documentations/.env.example).

**IMPORTANT NOTE:** Make sure that your **.env** file is private, and that you never share its contents.

## Set Deployment Environment

1. Set your deployment environment by forking the network you want to use for the Hardhat node. We recommend using your own RPC URL for better reliability. You can create your own Web3 API keys on the Infura website: [Infura](https://www.infura.io/)

2. Add the following at the top of your **.env** file:

```env
API_KEY=""        // Insert your Web3 API key between the quotation marks
PRIVATE_KEY=""    // Insert any Hardhat wallet private key between the quotation marks
```

## Launch Hardhat Node

Command to launch Hardhat node:

```bash
npx hardhat node    
```

## Deploy Trading Contract

Command to deploy trading contract:

```bash
npx hardhat run --network localhost scripts/1_deploy.js 
```

In your command line, you will see the address that the contract has been deployed to. Copy the address, then head to the [Config](./config.json) file then paste the address in between the quotation marks of the *ARBITRAGE_ADDRESS*

## Start the Bot 

Open a new command line window then use the command to deploy the trading bot script:

```bash
node bot.js
```

Please see our [Arbitrage Bot Project Documentations](./Arbitrage-Bot-Project-Documentations/Trading-Bot-Functions-Explanation.md) for a detailed explanation of the functions of the trading bot.


## Trigger the Arbitrage 

Because we forked the Ethereum mainnet, the state of the blockchain is frozen at the moment that it got forked so the state doesn't get updated. We need to manipulate the price of the token that gets traded against in order to trigger the bot to execute an arbitrage trade.


Open a new command line window then use the following command to trigger the arbitrage:

```bash
npx hardhat run --network localhost scripts/2_manipulate.js
```

Keep in mind, after running this script, you may need to restart your hardhat node, and re-deploy contracts to properly retest. 


**Note** This step only manipulates token price in your local blockchain not on the actual one. If you are doing an arbitrage for a different *ERC20* token other than the one in the provided example which are *(LINK/WETH)*. Make sure you modify the unlocked account, you will need to go on the block explorers of the blockchain you are using and find a *WHALE ADDRESS*. Also make sure you modify the amount of tokens you want that account to spent in order to manipulate price then you may need to adjust profitability reporting in the `executeTrade` function.

## Additional Information

- The [Server](./helpers/server.js) script is responsible for spinning up a local server.

## Strategy Overview

The current strategy implemented is only shown as an example alongside with the **manipulate.js** script. After we manipulate price on Uniswap, we fetch the reserves on Uniswap & Sushiswap and determine the lower *LINK* amount by dividing the lower amount by half. Based off of the strategy you plan to use dividing by half may not be the most optimal.

## Using Trading Bot on Mainnet 

Please view our [Arbitrage Bot Project Documentations](./Arbitrage-Bot-Project-Documentations/Mainnet.md) to view how to use the trading bot for arbitrage on a mainnet.

## Contributions

Contributions to this project are welcome and encouraged. If you identify any bugs, have feature requests, or would like to improve the project, please open an issue or submit a pull request. We appreciate your interest and contributions.

## License

This project does not use a license.

## Project Updates

As the DeFi ecosystem continues to evolve, we will monitor and update this project to align with the latest developments and best practices. Stay tuned for updates and improvements!

## Donations

### Our Values

We do not use any form of social media or engage in marketing activities. Our principles are rooted in open source and privacy, and we do not receive compensation for our contributions to GitHub. Furthermore, we do not endorse or have affiliations with any other projects.

### Supporting Us

While we remain committed to providing valuable resources for aspiring blockchain developers, any donations are greatly appreciated. Your support will help us offset the time and effort we invest in these projects to facilitate access to accessible information.

### Donation Options

We welcome contributions in Bitcoin and Monero, and you can send contributions by scanning one of the addresses in the QR codes at the following link: [Donate to Innovation Web 3.0](https://innovationweb3.github.io/)

We extend our gratitude for exploring our project and thank you for your support.