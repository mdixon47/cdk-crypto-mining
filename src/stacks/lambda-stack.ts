import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as s3 from "aws-cdk-lib/aws-s3"

interface LambdaStackProps extends cdk.StackProps {
  bucket: s3.Bucket
}

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props)

    const lambdaFunction = new lambda.Function(this, "CryptoMiningFunction", {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("lambda"),
      environment: {
        BUCKET_NAME: props.bucket.bucketName,
      },
    })

    // Grant Lambda permission to read/write to the S3 bucket
    props.bucket.grantReadWrite(lambdaFunction)
  }
}
