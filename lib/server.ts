"use server"
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { SessionData, sessionOptions } from './session';

export async function getPrivateKey() {
    return process.env.ADMIN_WALLET_PRIVATE_KEY! as `0x${string}`
}

// 3. Create a helper function to get the session
// This uses the Next.js 14 App Router `cookies()` function
export async function getSession() {
    const session = await getIronSession<SessionData>(await cookies(), { ...sessionOptions, password: process.env.SECRET_COOKIE_PASSWORD! });
    // console.log('session: ', session);
    return session;
}
