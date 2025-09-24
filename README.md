# BASIC-SMART-CONTRACT-DEVELOPMENT

COMPANY : CODTECH IT SOLUTIONS
NAME : BUDALAPATI AKSA SREE
INTERN ID : CT06DY760
DOMAIN : BLOCK CHAIN TECHNOLOGY
DURATION : 6 WEEKS
MENTOR : NEELA SANTOSH

The objective of this task was to design and implement a simple token transfer system on the Ethereum blockchain using Solidity, the primary programming language for writing smart contracts. The purpose of this project was to gain practical experience with blockchain programming concepts such as token creation, account balance management, and event handling, as well as to understand how decentralized transactions operate without intermediaries.

The smart contract, named TokenTransfer, follows a simplified model of an ERC-20 token, providing the basic functionality required for transferring tokens between accounts. The contract defines essential token metadata including the token name (MyToken), symbol (MTK), decimal precision (18), and the total supply of tokens. These metadata elements help in standardizing the token and making it identifiable within wallets and other applications on the Ethereum network.

A key feature of the contract is the balanceOf mapping, which tracks the token balance of each account. This ensures that every user’s token holdings are recorded on the blockchain in a secure and immutable manner. The contract also defines a Transfer event, which is emitted whenever a transfer operation occurs. Events provide a way for external applications and users to track token movements efficiently, making it easier to build interfaces and dashboards that respond to on-chain activity.

The constructor of the smart contract assigns the entire initial supply of tokens to the deployer’s address. This approach mirrors the common practice in token distribution, where the creator initially holds all tokens and can distribute them according to the rules of the application. The transfer function allows any token holder to send tokens to another Ethereum address. The function first checks that the sender has sufficient balance, deducts the amount from the sender’s balance, credits it to the recipient’s balance, and emits the Transfer event to log the transaction. This ensures that token transfers are secure, atomic, and transparent.

The deployment of this smart contract can be carried out on a local development blockchain such as Ganache for testing purposes. Developers can use tools like Hardhat or Truffle to compile the Solidity code, deploy it to the blockchain, and interact with it through scripts or frontend applications. The simplicity of this token transfer system makes it a good starting point for understanding the foundational concepts of token standards, account management, and event-driven programming in Ethereum.

Overall, this task provided practical insights into blockchain development, including smart contract programming, transaction management, and tokenomics. By implementing a simple token transfer system, developers learn how to create secure, transparent, and decentralized systems that form the backbone of modern blockchain applications. The deliverables of this task include the Solidity smart contract code, deployment scripts, and proof of deployment, which together constitute a functional, testable token transfer system.
