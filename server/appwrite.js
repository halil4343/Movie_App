import dotenv from 'dotenv';
import { Client, Account, Databases, Storage, Functions, Avatars } from 'react-native-appwrite';

dotenv.config();

export const config = {
    platform: "com.hozer.m_series",
    endpoint: process.env.APPWRITE_ENDPOINT,
    projectId: process.env.APPWRITE_PUBLIC_ID,
};
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your platform ID
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatar = new Avatars(client);