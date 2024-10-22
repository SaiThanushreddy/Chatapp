import express from 'express';
import dotenv from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import connectDB from './config/db.js';

const app = express();
app.use(cors())
app.use(express.json()); 

connectDB()
dotenv.config();
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// Set up the S3 client
const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  signatureVersion: 'v4',
});

app.get('/api/s3-upload-url', async (req, res) => {
  const fileName = req.headers.filename; 
  const fileType = req.headers.filetype; 
  const username = req.headers.username;
  

  if (!fileName || !fileType) {
    return res.status(400).json({ error: 'File name and file type are required' });
  }

  const s3Params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${username}/${fileName}`,  
    ContentType: fileType,
   
};


  try {
    const command = new PutObjectCommand(s3Params);
    const url = await getSignedUrl(s3, command);
    res.json({ uploadURL: url });
  } catch (err) {
    res.status(500).json({ error: 'Error generating pre-signed URL',  err });
  }
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use(express.json());

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
