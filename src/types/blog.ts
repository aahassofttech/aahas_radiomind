export type BlogCategory =
  | "AI in Radiology"
  | "PACS & Integration"
  | "Clinical Workflow"
  | "Product Updates"
  | "Industry Insights";

export interface SeoFields {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
  canonicalPath?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown-ish plain text with \n\n paragraphs
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  status: "published" | "draft";
  seo: SeoFields;
}

export interface BlogPostInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: BlogCategory;
  tags: string[];
  authorName: string;
  authorRole: string;
  status: "published" | "draft";
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}
