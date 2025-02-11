import { Client, Account, Databases, Storage, Functions, Avatars, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from 'expo-web-browser';
import { APPWRITE_ENDPOINT, APPWRITE_PUBLIC_ID } from '@env';

export const config = {
    platform: "com.hozer.m_series",
    endpoint: APPWRITE_ENDPOINT,
    projectId: APPWRITE_PUBLIC_ID,
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

//login
export async function login() {
    try {
        const redirectUri = Linking.createURL("/");
        console.log("Redirect URI:", redirectUri);

        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);
        if (!response) throw new Error("Failed to login. OAuth2 token response is null");

        console.log("OAuth2 Token Response:", response);

        // Redirect to the OAuth URL
        window.location.href = response.toString();

        // Listen for the redirect back to the app
        window.addEventListener("message", async (event) => {
            if (event.origin !== window.location.origin) return;

            const { secret, userId } = event.data;
            if (!secret || !userId) throw new Error("Failed to login. Secret or User ID is null");

            console.log("Secret:", secret);
            console.log("User ID:", userId);

            const session = await account.createSession(userId, secret);
            console.log("Session:", session);
                    
            if (!session) throw new Error("Failed to create a session");

            return true;
        });
    } catch (error) {
        console.error("Login Error:", error);
        return false;
    }
}
//logout
export async function logout() {
    try {
        await account.deleteSession("current")
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}

//getUser
export async function getUser() {
    try {
        const user = await account.get()
        if(user.$id){
            const userAvatar = avatar.getInitials(user.name) 
            return {
                ...user,
                avatar: userAvatar.toString()}
        }
    } catch (error) {
        console.error(error);
        return null
    }
}