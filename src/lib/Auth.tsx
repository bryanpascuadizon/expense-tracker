import { jwtVerify, SignJWT } from "jose";
import { nanoid } from "nanoid";
import cookie from "cookie"
import { UserJWTPayload } from "@/utils/types";

export const getJWTSecretKey = () => {
  const secret: string = process.env.JWT_SECRET_KEY;
  if (!secret || secret.length === 0) {
    throw new Error("JWT_SECRET_KEY is not set");
  }

  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJWTSecretKey())
    );

    return verified.payload as UserJWTPayload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
};

export const createCookie = async () => {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(getJWTSecretKey()));

  const serializedCookie = cookie.serialize("user-token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600, // Expires in 1 hour
    path: "/",
  });

  return serializedCookie;
};

export const getUserId = () => {
  if (typeof window !== "undefined") {
    const userId = localStorage.getItem("user-id");
    return userId;
  }
};

export const getUserName = () => {
  if (typeof window !== "undefined") {
    const userName = localStorage.getItem("user-name");
    return userName;
  }
};
