import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PostForm from "@/components/dashboard/PostForm";

export default function NewPostPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-ink">New Post</h1>
      <p className="mt-1 text-sm text-slate">Create a new blog post.</p>
      <div className="mt-6 max-w-3xl">
        <PostForm />
      </div>
    </DashboardLayout>
  );
}
