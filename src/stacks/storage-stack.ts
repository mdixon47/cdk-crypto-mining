import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as s3 from "aws-cdk-lib/aws-s3"

export class StorageStack extends cdk.Stack {
  public readonly bucket: s3.Bucket

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.bucket = new s3.Bucket(this, "CryptoMiningBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })
  }
}
