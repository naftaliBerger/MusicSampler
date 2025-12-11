import { S3Client,ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "dotenv";
config();

const s3 = new S3Client({
    endpoint: process.env.VITE_SUPABASE_ENDPOINT,
  region: process.env.VITE_SUPABASE_REGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.VITE_SUPABASE_ACCESS_KEY!,
    secretAccessKey: process.env.VITE_SUPABASE_SECRET_KEY!,
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

export async function getUrls(prefix){
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


