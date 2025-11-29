import { SessionOptions } from 'iron-session';


// 1. Define the shape of your session data
// This is where you can add whatever you want to store
export interface SessionData extends SessionOptions {
  isLoggedIn?: boolean;
  walletAddress?: string;
  messageToSign?: string;
  // Add any other data you want to store in the session
}

// 2. Define your session options
export const sessionOptions = {
  cookieName: 'aegis-session', // Name of your cookie
  cookieOptions: {
    // secure: process.env.NODE_ENV === 'production', // Use this in production (HTTPS)
    secure: false, // Use this for local development (HTTP)
  },
};