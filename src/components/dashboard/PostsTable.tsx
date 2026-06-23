"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlinePencilSquare, HiOutlineTrash, HiOutlineEye } from "react-icons/hi2";
import { BlogPost } from "@/types/blog";
import { formatDate, cn } from "@/lib/utils";

export default function PostsTable({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const router = useRouter();

  async function handleToggleStatus(id: string) {
    setPendingId(id);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "PATCH" });
      if (res.ok) {
        const { post } = await res.json();
        setPosts((prev) => prev.map((p) => (p.id === id ? post : p)));
      }
    } finally {
      setPendingId(null);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!window.confirm(`Delete "${title}"? This can't be undone.`)) return;
    setPendingId(id);
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        router.refresh();
      }
    } finally {
      setPendingId(null);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white p-12 text-center">
        <p className="text-sm text-slate">No posts yet. Create your first post to get started.</p>
        <Link
          href="/dashboard/posts/new"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
        >
          + New Post
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-border bg-surface text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="px-5 py-3 font-medium">Title</th>
            <th className="px-5 py-3 font-medium">Category</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Date</th>
            <th className="px-5 py-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {posts.map((post) => {
            const isPending = pendingId === post.id;
            return (
              <tr key={post.id} className={cn(isPending && "opacity-50")}>
                <td className="max-w-xs px-5 py-4">
                  <p className="font-medium text-ink line-clamp-1">{post.title}</p>
                  <p className="text-xs text-muted line-clamp-1">/{post.slug}</p>
                </td>
                <td className="px-5 py-4 text-slate">{post.category}</td>
                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(post.id)}
                    disabled={isPending}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      post.status === "published"
                        ? "bg-green-50 text-green-700 hover:bg-green-100"
                        : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                    )}
                  >
                    {post.status === "published" ? "Published" : "Draft"}
                  </button>
                </td>
                <td className="px-5 py-4 text-slate">{formatDate(post.publishedAt)}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {post.status === "published" && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate hover:bg-surface hover:text-primary"
                        aria-label="View post"
                      >
                        <HiOutlineEye className="h-4 w-4" />
                      </Link>
                    )}
                    <Link
                      href={`/dashboard/posts/${post.id}`}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate hover:bg-surface hover:text-primary"
                      aria-label="Edit post"
                    >
                      <HiOutlinePencilSquare className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(post.id, post.title)}
                      disabled={isPending}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate hover:bg-red-50 hover:text-red-600"
                      aria-label="Delete post"
                    >
                      <HiOutlineTrash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
