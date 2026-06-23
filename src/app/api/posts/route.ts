export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/posts";
import { BlogPostInput } from "@/types/blog";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as BlogPostInput;

  if (!body.title?.trim() || !body.excerpt?.trim() || !body.content?.trim() || !body.category) {
    return NextResponse.json(
      { error: "Title, excerpt, content, and category are required." },
      { status: 400 }
    );
  }

  const post = createPost(body);
  return NextResponse.json({ post }, { status: 201 });
}
