export const runtime = "edge";

import { notFound } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PostForm from "@/components/dashboard/PostForm";
import { getPostById } from "@/lib/posts";

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-ink">Edit Post</h1>
      <p className="mt-1 text-sm text-slate line-clamp-1">{post.title}</p>
      <div className="mt-6 max-w-3xl">
        <PostForm initialPost={post} />
      </div>
    </DashboardLayout>
  );
}
