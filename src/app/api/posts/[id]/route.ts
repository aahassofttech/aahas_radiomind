import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost, toggleStatus } from "@/lib/posts";
import { BlogPostInput } from "@/types/blog";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = (await request.json()) as BlogPostInput;

  if (!body.title?.trim() || !body.excerpt?.trim() || !body.content?.trim() || !body.category) {
    return NextResponse.json(
      { error: "Title, excerpt, content, and category are required." },
      { status: 400 }
    );
  }

  const post = updatePost(id, body);
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PATCH(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const post = toggleStatus(id);
  if (!post) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const success = deletePost(id);
  if (!success) {
    return NextResponse.json({ error: "Post not found." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
