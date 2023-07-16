import Tags from "@/models/tags";
import { connectToDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface ParamsProps {
  params: {
    id: string;
  };
}

export const GET = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();
    const tags = await Tags.find({ user_id: params.id });
    return new NextResponse(JSON.stringify(tags), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to post tag: ${error}`, { status: 500 });
  }
};

export const POST = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();
    const data = await req.json();
    const { name, color } = data.tags;
    const tag = await new Tags({
      name,
      color,
      user_id: params.id,
    });

    tag.save();

    return new NextResponse(JSON.stringify(tag), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to post tag: ${error}`, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();
    const data = await req.json();
    const { id, name, color } = data.tags;
    const existingTag = await Tags.findById({ _id: params.id });

    if (!existingTag) {
      return new NextResponse(`Tag not found`, { status: 404 });
    }

    existingTag.name = name;
    existingTag.color = color;
    existingTag.save();

    return new NextResponse(JSON.stringify(existingTag), { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to post tag: ${error}`, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest, { params }: ParamsProps) => {
  try {
    await connectToDB();
    const existingTag = await Tags.findByIdAndRemove({ _id: params.id });
    if (!existingTag) {
      return new NextResponse(`Tag not found`, { status: 404 });
    }
    return new NextResponse("Successfully deleted tag", { status: 200 });
  } catch (error) {
    return new NextResponse(`Failed to post tag: ${error}`, { status: 500 });
  }
};
