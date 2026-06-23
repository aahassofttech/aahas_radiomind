import { BlogPost } from "@/types/blog";
import BlogCard from "@/components/blog/BlogCard";

export default function RecentBlogs({
  posts,
  title = "Recent Blogs",
}: {
  posts: BlogPost[];
  title?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
