import { S3 } from "aws-sdk"
import { APIGatewayProxyHandler } from "aws-lambda"
import * as sharp from "sharp"

const s3 = new S3()

export const handler: APIGatewayProxyHandler = async (event) => {
  const bucketName = process.env.BUCKET_NAME!
  const imageName = `crypto-info-image-${Date.now()}.png`

  // Dummy image data; replace this with actual image processing logic
  const imageData = await sharp({
    create: {
      width: 800,
      height: 600,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .png()
    .toBuffer()

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: imageData,
    ContentType: "image/png",
  }

  try {
    await s3.putObject(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Image uploaded successfully to ${bucketName}/${imageName}`,
      }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to upload image",
      }),
    }
  }
}
