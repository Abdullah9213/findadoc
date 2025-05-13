import { OAuth2Client } from 'google-auth-library';


export const JWT_SECRET = "J9zE7p$mK2qR7zL4wF8vT1yC5bN6iS9b";
export const JWT_EXPIRE = '24h';

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const googleClient = new OAuth2Client(GOOGLE_CLIENT_ID);

export const getJwtSecret = () => process.env.JWT_SECRET;