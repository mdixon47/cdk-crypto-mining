import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import { EC2Stack } from "../src/stacks/ec2-stack"
import { LambdaStack } from "../src/stacks/lambda-stack"
import { StorageStack } from "../src/stacks/storage-stack"
import { VpcStack } from "../src/stacks/vpc-stack"

export class CdkCryptoMiningStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpcStack = new VpcStack(this, "VpcStack")
    const storageStack = new StorageStack(this, "StorageStack")
    const lambdaStack = new LambdaStack(this, "LambdaStack", {
      bucket: storageStack.bucket,
    })
    new EC2Stack(this, "EC2Stack", {
      vpc: vpcStack.vpc,
    })
  }
}
