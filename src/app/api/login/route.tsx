import { createCookie } from "@/lib/Auth";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();

    const data = await req.json();
    const { username, password } = data.login;

    const existingUser: any = await User.findOne({ username });

    if (existingUser && existingUser.password === password) {
      const serializedCookie: string = await createCookie();

      return new NextResponse(JSON.stringify(existingUser), {
        status: 200,
        headers: {
          "Set-Cookie": serializedCookie,
          "Content-Type": "text/plain",
        },
      });
    } else {
      return new NextResponse("Check Username or Password", { status: 401 });
    }
  } catch (error) {
    return new NextResponse(`Failed to Login: ${error}`, { status: 500 });
  }
};
