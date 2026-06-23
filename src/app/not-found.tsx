import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-base text-slate">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-surface-blue"
          >
            Visit Blog
          </Link>
        </div>
      </Container>
    </section>
  );
}
