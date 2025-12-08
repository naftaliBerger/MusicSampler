import { S3Client,ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


const s3 = new S3Client({
    endpoint:'https://ioybckwhjwlxsmukwsae.storage.supabase.co/storage/v1/s3',
    region: "us-east-1",
    forcePathStyle: true,
    credentials:{
        accessKeyId:'7371b6b6a1ff5dda0d521503afedbe08',
        secretAccessKey:'ba5a1655f1a2f19d267f47f064526bc37c103cd99e30316cbc71ab3a613079ee'
    }
})

export async function listFiles(folderName){
    const command = new ListObjectsV2Command({
        Bucket:"allMusic",
        Prefix:folderName
    })
    const response = await s3.send(command)
    return response.Contents
}

export async function getSignedUrlsFromFolder(prefix){
    const files = await listFiles(prefix)
        
    const urls = await Promise.all(
        files!.map(async(file) =>{
            const command = new GetObjectCommand({
                Bucket:"allMusic",
                Key:file.Key
            })
            return await getSignedUrl(s3,command,{ expiresIn: 3600 })
        })
    )
    return urls
}


