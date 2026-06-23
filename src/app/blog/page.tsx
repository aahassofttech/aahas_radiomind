import { Metadata } from "next";
import Container from "@/components/ui/Container";
import BlogList from "@/components/blog/BlogList";
import { getPublishedPosts, getCategories } from "@/lib/posts";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on AI in radiology, PACS integration, clinical workflow design, and product updates from the Radiomind team.",
  path: "/blog",
  keywords: ["radiology blog", "AI radiology insights", "PACS integration"],
});

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  const categories = getCategories();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            The Radiomind Blog
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Perspectives on AI in radiology, PACS integration, clinical
            workflow design, and what we&apos;re building next.
          </p>
        </div>

        <div className="mt-12">
          <BlogList posts={posts} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
