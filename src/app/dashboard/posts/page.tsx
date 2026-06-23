import Link from "next/link";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PostsTable from "@/components/dashboard/PostsTable";
import { getAllPosts } from "@/lib/posts";

export default function DashboardPostsPage() {
  const posts = getAllPosts();

  return (
    <DashboardLayout>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">All Posts</h1>
          <p className="mt-1 text-sm text-slate">{posts.length} total posts</p>
        </div>
        <Link
          href="/dashboard/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          <HiOutlinePlusCircle className="h-4 w-4" /> New Post
        </Link>
      </div>

      <div className="mt-6">
        <PostsTable initialPosts={posts} />
      </div>
    </DashboardLayout>
  );
}
