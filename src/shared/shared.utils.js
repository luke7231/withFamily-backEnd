import AWS from 'aws-sdk';
import { GraphQLUpload } from 'graphql-upload'

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
    }
})

//여기까지가 AWS에 로그인 하는 것.

export const uploadToS3 = async (file, userId, folderName) => {
    Upload: GraphQLUpload
    console.log(file)
    const { createReadStream, filename } = await file.file
    const readStream = createReadStream();
    const ObjName = `${folderName}/${userId}-${Date.now()}-${filename}`

    const upload = await new AWS.S3().upload({
        Bucket: "familyquestionapp",
        Key: ObjName,
        ACL: "public-read",
        Body: readStream
    }).promise()
    console.log("---")
    console.log(upload.Location)
    return upload.Location
}   