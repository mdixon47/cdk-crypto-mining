#!/usr/bin/env node
import "source-map-support/register"
import * as cdk from "aws-cdk-lib"
import { CdkCryptoMiningStack } from "../lib/cdk-crypto-mining-stack"
import { VpcStack } from "../lib/vpc-stack"
import { StorageStack } from "../lib/storage-stack"
import { LambdaStack } from "../lib/lambda-stack"
import { EC2Stack } from "../lib/ec2-stack"

const app = new cdk.App()

// Create the CdkCryptoMiningStack
new CdkCryptoMiningStack(app, "CdkCryptoMiningStack")

// Create the VPC Stack
const vpcStack = new VpcStack(app, "VpcStack")

// Create the Storage Stack
const storageStack = new StorageStack(app, "StorageStack")

// Create the Lambda Stack and pass the S3 bucket from the Storage Stack
new LambdaStack(app, "LambdaStack", {
  bucket: storageStack.bucket,
})

// Create the EC2 Stack and pass the VPC from the VpcStack
new EC2Stack(app, "EC2Stack", {
  vpc: vpcStack.vpc,
})
