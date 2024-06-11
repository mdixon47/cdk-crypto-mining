import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"
import * as ec2 from "aws-cdk-lib/aws-ec2"

interface EC2StackProps extends cdk.StackProps {
  vpc: ec2.Vpc
}

export class EC2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EC2StackProps) {
    super(scope, id, props)

    const securityGroup = new ec2.SecurityGroup(this, "CryptoMiningSG", {
      vpc: props.vpc,
      allowAllOutbound: true,
    })

    securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      "Allow SSH access"
    )

    const instanceType = new ec2.InstanceType("t2.micro")
    const machineImage = new ec2.AmazonLinuxImage()

    for (let i = 0; i < 2; i++) {
      new ec2.Instance(this, `CryptoMiningInstance${i}`, {
        vpc: props.vpc,
        instanceType: instanceType,
        machineImage: machineImage,
        securityGroup: securityGroup,
      })
    }
  }
}
