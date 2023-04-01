import { config } from 'dotenv'; // Environtment Variables
config();

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  bucket_name: process.env.AWS_BUCKET_NAME,
  bucket_region: process.env.AWS_BUCKET_REGION,
  public_key: process.env.AWS_ACCESS_KEY_ID,
  secret_key: process.env.AWS_SECRET_ACCESS_KEY
}