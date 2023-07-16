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
      return new NextResponse(JSON.stringify(existingUser), { status: 200 });
    } else {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    return new NextResponse(`Failed to Login: ${error}`, { status: 500 });
  }
};
