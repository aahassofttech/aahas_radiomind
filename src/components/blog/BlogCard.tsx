import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import BlogImage from "@/components/blog/BlogImage";
import Badge from "@/components/ui/Badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <BlogImage slug={post.slug} className="transition-transform duration-300 group-hover:scale-105" />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Badge className="self-start">{post.category}</Badge>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:text-primary-dark"
          >
            Read more <HiOutlineArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
