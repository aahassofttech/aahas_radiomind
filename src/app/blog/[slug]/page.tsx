import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import BlogImage from "@/components/blog/BlogImage";
import RecentBlogs from "@/components/blog/RecentBlogs";
import { getPostBySlug, getRecentPosts, getRelatedPosts, getPublishedPosts } from "@/lib/posts";
import { formatDate, readingTime } from "@/lib/utils";
import { buildMetadata, SITE_URL } from "@/lib/seo";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return buildMetadata({
      title: "Post not found",
      description: "This blog post could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.seo.keywords,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const related = getRelatedPosts(post, 3);
  const recent = getRecentPosts(post.slug, 3);
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author.name },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
        >
          <HiOutlineArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <Badge className="mt-6">{post.category}</Badge>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-5 border-b border-border pb-6 text-sm text-muted">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-blue text-sm font-semibold text-primary">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-ink">{post.author.name}</p>
              <p className="text-xs text-muted">{post.author.role}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineCalendar className="h-4 w-4" /> {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineClock className="h-4 w-4" /> {readingTime(post.content)} min read
          </span>
        </div>

        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <BlogImage slug={post.slug} />
        </div>

        <div className="prose-blog mt-10 space-y-5">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate">
              {para}
            </p>
          ))}
        </div>

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {related.length > 0 && <RecentBlogs posts={related} title="Related Posts" />}
        <RecentBlogs posts={recent} title="Recent Blogs" />
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
