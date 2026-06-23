"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputField, TextareaField, SelectField } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { BlogCategory, BlogPost, BlogPostInput } from "@/types/blog";
import { FormFieldError } from "@/types/content";
import { validatePostForm } from "@/lib/validation";

const CATEGORY_OPTIONS: { label: string; value: BlogCategory }[] = [
  { label: "AI in Radiology", value: "AI in Radiology" },
  { label: "PACS & Integration", value: "PACS & Integration" },
  { label: "Clinical Workflow", value: "Clinical Workflow" },
  { label: "Product Updates", value: "Product Updates" },
  { label: "Industry Insights", value: "Industry Insights" },
];

const STATUS_OPTIONS = [
  { label: "Draft", value: "draft" },
  { label: "Published", value: "published" },
];

interface PostFormProps {
  initialPost?: BlogPost;
}

export default function PostForm({ initialPost }: PostFormProps) {
  const router = useRouter();
  const isEditing = !!initialPost;

  const [fields, setFields] = useState({
    title: initialPost?.title || "",
    slug: initialPost?.slug || "",
    excerpt: initialPost?.excerpt || "",
    content: initialPost?.content || "",
    featuredImage: initialPost?.featuredImage || "",
    category: initialPost?.category || ("" as BlogCategory | ""),
    tags: initialPost?.tags.join(", ") || "",
    authorName: initialPost?.author.name || "",
    authorRole: initialPost?.author.role || "",
    status: initialPost?.status || "draft",
    metaTitle: initialPost?.seo.metaTitle || "",
    metaDescription: initialPost?.seo.metaDescription || "",
    keywords: initialPost?.seo.keywords.join(", ") || "",
  });
  const [errors, setErrors] = useState<FormFieldError>({});
  const [saving, setSaving] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key as string]) setErrors((prev) => ({ ...prev, [key as string]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);
    const validation = validatePostForm(fields);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSaving(true);
    try {
      const payload: BlogPostInput = {
        ...fields,
        category: fields.category as BlogCategory,
        tags: fields.tags.split(",").map((t) => t.trim()).filter(Boolean),
        status: fields.status as "draft" | "published",
      };

      const res = await fetch(
        isEditing ? `/api/posts/${initialPost!.id}` : "/api/posts",
        {
          method: isEditing ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }

      router.push("/dashboard/posts");
      router.refresh();
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {serverError && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="text-base font-semibold text-ink">Content</h2>
        <div className="mt-5 grid gap-5">
          <InputField
            label="Title"
            required
            value={fields.title}
            onChange={(e) => update("title", e.target.value)}
            error={errors.title}
            placeholder="How AI-Assisted Reporting Is Changing Radiology"
          />
          <InputField
            label="Slug"
            value={fields.slug}
            onChange={(e) => update("slug", e.target.value)}
            error={errors.slug}
            placeholder="auto-generated-from-title-if-left-blank"
          />
          <TextareaField
            label="Excerpt"
            required
            rows={3}
            value={fields.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            error={errors.excerpt}
            placeholder="A short summary shown on blog cards and search results"
          />
          <TextareaField
            label="Content"
            required
            rows={12}
            value={fields.content}
            onChange={(e) => update("content", e.target.value)}
            error={errors.content}
            placeholder="Write your post content. Separate paragraphs with a blank line."
          />
          <InputField
            label="Featured Image URL"
            value={fields.featuredImage}
            onChange={(e) => update("featuredImage", e.target.value)}
            error={errors.featuredImage}
            placeholder="/images/blog/my-post.svg (leave blank to auto-generate)"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="text-base font-semibold text-ink">Organization</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <SelectField
            label="Category"
            required
            options={CATEGORY_OPTIONS}
            placeholder="Select a category"
            value={fields.category}
            onChange={(e) => update("category", e.target.value as BlogCategory)}
            error={errors.category}
          />
          <SelectField
            label="Status"
            required
            options={STATUS_OPTIONS}
            value={fields.status}
            onChange={(e) => update("status", e.target.value as "draft" | "published")}
            error={errors.status}
          />
          <InputField
            label="Tags (comma separated)"
            value={fields.tags}
            onChange={(e) => update("tags", e.target.value)}
            error={errors.tags}
            placeholder="AI reporting, workflow, radiology trends"
            className="sm:col-span-2"
          />
          <InputField
            label="Author Name"
            value={fields.authorName}
            onChange={(e) => update("authorName", e.target.value)}
            error={errors.authorName}
            placeholder="Dr. Anika Rao"
          />
          <InputField
            label="Author Role"
            value={fields.authorRole}
            onChange={(e) => update("authorRole", e.target.value)}
            error={errors.authorRole}
            placeholder="Clinical Lead"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="text-base font-semibold text-ink">SEO</h2>
        <div className="mt-5 grid gap-5">
          <InputField
            label="Meta Title"
            value={fields.metaTitle}
            onChange={(e) => update("metaTitle", e.target.value)}
            error={errors.metaTitle}
            placeholder="Defaults to post title if left blank"
          />
          <TextareaField
            label="Meta Description"
            rows={3}
            value={fields.metaDescription}
            onChange={(e) => update("metaDescription", e.target.value)}
            error={errors.metaDescription}
            placeholder="Defaults to excerpt if left blank"
          />
          <InputField
            label="Keywords (comma separated)"
            value={fields.keywords}
            onChange={(e) => update("keywords", e.target.value)}
            error={errors.keywords}
            placeholder="AI radiology, PACS, DICOM viewer"
          />
        </div>
      </section>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : isEditing ? "Save Changes" : "Create Post"}
        </Button>
        <Button variant="ghost" type="button" onClick={() => router.push("/dashboard/posts")}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
