# Welcome to your CDK Cryto Miner Project 0.0

## What is Crypto Miner?
Crypto mining is the process through which transactions for various forms of cryptocurrency are verified and added to the blockchain digital ledger. Also known as cryptocoin mining, altcoin mining, or Bitcoin mining (for the most popular form of cryptocurrency, Bitcoin), the mining process involves compiling recent transactions into blocks and trying to solve a computationally difficult puzzle.

## Mining Ethereum in AWS — is it worth it?
https://michael-ludvig.medium.com/mining-ethereum-on-aws-is-it-worth-it-f13645c12eec

## The new AWS instance that makes ETH mining profitable
https://medium.com/coinmonks/new-aws-instance-that-makes-eth-mining-profitable-1dd87183cce7

## Crypto Mining References:

If you are interested in learning more about cryptocurrency mining, there are several resources available online that can help you understand the process, the technology, and the economics behind it. Here are some useful references:



1. **Bitcoin.org**: The original cryptocurrency's website provides a deep dive into Bitcoin's workings, including mining.
   - [Bitcoin Mining Overview](https://bitcoin.org/en/how-it-works#mining)

2. **Ethereum.org**: Ethereum's official site, which explains the process and the shift from proof of work (used in mining) to proof of stake.
   - [Introduction to Ethereum Mining](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/)

3. **CryptoCompare**: A platform that offers a mining calculator, which can be used to calculate the profitability of various cryptocurrencies that you can mine.
   - [CryptoCompare Mining Calculator](https://www.cryptocompare.com/mining/calculator/)

4. **Investopedia**: Known for its clear explanations of financial and investment concepts, Investopedia has a useful section on cryptocurrency mining.
   - [What Is Crypto Mining?](https://www.investopedia.com/terms/c/cryptocurrency-mining.asp)

5. **CoinMarketCap**: A leading price-tracking website for crypto assets. It’s a good source for tracking the profitability of different cryptocurrencies, which is crucial for mining.
   - [Crypto Market Cap](https://coinmarketcap.com/)

6. **CoinDesk**: Provides news, expert blogs, and educational articles on Bitcoin and digital currencies, including topics on mining.
   - [Mining 101](https://www.coindesk.com/learn/bitcoin-101/what-is-bitcoin-mining/)

These resources offer a broad spectrum of information suitable for various levels of expertise and interests in crypto mining. Whether you are looking to understand the basic principles of mining or seeking in-depth technical analyses and profitability calculations, these sites can be valuable tools.

## AWS Crypto Miner Repository
- https://github.com/mludvig/aws-ethereum-miner

## CDK Crypto Miner Project Solution
 Creating a cryptocurrency mining solution on AWS involves several steps, including setting up a virtual private cloud (VPC) for security, deploying compute instances optimized for mining, and configuring the necessary software. Using AWS CloudFormation and the AWS Cloud Development Kit (CDK), you can automate the deployment and management of your mining infrastructure. Here's an overview of how you might approach this:

- Step 1: Design Your Architecture

    First, decide on your mining application. Different cryptocurrencies might require different mining software and configurations. Common choices include cgminer, bfgminer for Bitcoin, or ethminer for Ethereum.

    This is a test version of the CryptoMiner architecture:

    ![CrytoMiner Archeture 1](/images/ArchectureCryptoMiner.png)

- Step 2: Create a VPC

    For security, deploy your mining operations within a VPC. You'll need to define subnets, an internet gateway, and route tables. This isolates your mining operations and allows you to control access more tightly.

- Step 3: Set Up EC2 Instances

    Choose an EC2 instance type optimized for the type of mining you plan to do. For GPU-intensive cryptocurrencies, consider using GPU instances like the p3 or g4 series. Your CloudFormation template or CDK script will need to specify the instance type, AMI, and the VPC subnet to deploy these instances into.

- Step 4: Automate Mining Software Installation

    Use EC2 user data to bootstrap your instances with the necessary mining software. Your CloudFormation template or CDK script can include a bash script that runs on instance launch, installing the mining software and configuring it to start mining to your wallet automatically.

- Step 5: Monitoring and Scaling

    Consider how you'll monitor your mining operation and whether you'll want to automatically scale up or down based on certain metrics, such as the profitability of mining or the AWS spot instance prices. AWS CloudWatch can monitor your instances, and you can use AWS Lambda in conjunction with CloudWatch alerts to automate scaling actions.

- Step 6: Security and Cost Optimization

    Ensure that your mining operation is secure by following AWS best practices for security groups, IAM roles, and encryption. You can also optimize costs by using spot instances for mining, which can be significantly cheaper than on-demand instances. 

## Using AWS CloudFormation

AWS CloudFormation allows you to model your entire infrastructure in a text file template (YAML or JSON), which you can use to create, update, and delete your resources in a managed and predictable way.

## Refect on the crypto mining project

 The CDK is not buiding all the AMI's (EC2) required to perform the task.
      
 1.  Make sure all the AMI written in the original stack are in the CDK in typescript.    
 2.  The Bash scrip and the 2 Python commands must be utilized in the CDK.    
 
 Two ways to do this.Put them both in Bucket and point the CDK to the bucket or Create a Lambda function copy the code and name them.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


## CDK Deploy Errors:

## Successful Deploy: June 12, 2024

## Additional Information: