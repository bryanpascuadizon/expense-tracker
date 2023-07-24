import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export const POST = async (req: NextRequest) => {
  try {
    const serializedCookie = cookie.serialize("user-token", "", {
      maxAge: -1,
      path: "/",
    });

    return new NextResponse("Logout Successfully", {
      status: 200,
      headers: {
        "Set-Cookie": serializedCookie,
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to logout.", { status: 500 });
  }
};
