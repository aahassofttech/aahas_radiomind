"use client";

import { useMemo, useState } from "react";
import { BlogPost } from "@/types/blog";
import BlogCard from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";

export default function BlogList({ posts, categories }: { posts: BlogPost[]; categories: string[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat
                ? "border-primary bg-primary text-white"
                : "border-border text-slate hover:border-primary hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-slate">No posts in this category yet. Check back soon.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
