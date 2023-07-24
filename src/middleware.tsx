import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/Auth";
import { UserJWTPayload } from "./utils/types";

export const middleware = async (req: NextRequest) => {
  const token = req.cookies.get("user-token")?.value;
  let verifiedToken: void | string | UserJWTPayload | undefined = undefined;
  if (token) {
    verifiedToken =
      token &&
      (await verifyAuth(token).catch((err: Error) => {
        console.error(err);
      }));
  }

  if (!verifiedToken) {
    console.log("not verified 1", token);
    return NextResponse.redirect(new URL(process.env.NEXTAUTH_URL + "/login"));
  }
};

export const config = {
  matcher: ["/dashboard", "/"],
};
