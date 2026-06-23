import Link from "next/link";
import { HiOutlineDocumentText, HiOutlineCheckCircle, HiOutlinePencilSquare } from "react-icons/hi2";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getAllPosts } from "@/lib/posts";

export default function DashboardHomePage() {
  const posts = getAllPosts();
  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.filter((p) => p.status === "draft").length;

  const cards = [
    { label: "Total Posts", value: posts.length, icon: HiOutlineDocumentText },
    { label: "Published", value: published, icon: HiOutlineCheckCircle },
    { label: "Drafts", value: drafts, icon: HiOutlinePencilSquare },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
      <p className="mt-1 text-sm text-slate">Manage your blog content from one place.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-border bg-white p-6">
            <Icon className="h-6 w-6 text-primary" />
            <p className="mt-4 text-2xl font-bold text-ink">{value}</p>
            <p className="text-sm text-muted">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/dashboard/posts"
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Go to All Posts &rarr;
        </Link>
      </div>
    </DashboardLayout>
  );
}
