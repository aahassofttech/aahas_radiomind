import Link from "next/link";
import { HiOutlineCpuChip, HiOutlineDocumentText, HiOutlinePlusCircle, HiOutlineGlobeAlt } from "react-icons/hi2";
import Container from "@/components/ui/Container";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="border-b border-border bg-white">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <HiOutlineCpuChip className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-bold text-ink">
              Radiomind <span className="text-muted">Dashboard</span>
            </span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-primary"
          >
            <HiOutlineGlobeAlt className="h-4 w-4" /> View site
          </Link>
        </Container>
      </div>

      <Container className="flex flex-col gap-8 py-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-56">
          <nav className="flex flex-row gap-2 lg:flex-col">
            <Link
              href="/dashboard/posts"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate hover:bg-white hover:text-primary"
            >
              <HiOutlineDocumentText className="h-4 w-4" /> All Posts
            </Link>
            <Link
              href="/dashboard/posts/new"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate hover:bg-white hover:text-primary"
            >
              <HiOutlinePlusCircle className="h-4 w-4" /> New Post
            </Link>
          </nav>
        </aside>

        <main className="flex-1">{children}</main>
      </Container>
    </div>
  );
}
