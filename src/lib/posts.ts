import "server-only";
import { BlogPost, BlogPostInput } from "@/types/blog";
import { readStore, writeStore } from "@/lib/file-store";

/**
 * Posts data-access layer.
 *
 * Everything in the app reads/writes blog posts through these functions
 * instead of touching the file store directly. That makes it
 * straightforward to swap the underlying storage for a real database or
 * headless CMS later without touching pages, components, or API routes.
 */

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getAllPosts(): BlogPost[] {
  return readStore().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return readStore().find((p) => p.slug === slug);
}

export function getPostById(id: string): BlogPost | undefined {
  return readStore().find((p) => p.id === id);
}

export function getRecentPosts(excludeSlug?: string, limit = 3): BlogPost[] {
  return getPublishedPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = getPublishedPosts().filter(
    (p) => p.category === post.category && p.slug !== post.slug
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = getPublishedPosts().filter(
    (p) => p.slug !== post.slug && !sameCategory.includes(p)
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getCategories(): string[] {
  const cats = new Set(getPublishedPosts().map((p) => p.category));
  return Array.from(cats);
}

function buildSlug(input: BlogPostInput, posts: BlogPost[], currentId?: string): string {
  const base = input.slug ? slugify(input.slug) : slugify(input.title);
  let candidate = base;
  let counter = 2;
  while (posts.some((p) => p.slug === candidate && p.id !== currentId)) {
    candidate = `${base}-${counter}`;
    counter += 1;
  }
  return candidate;
}

export function createPost(input: BlogPostInput): BlogPost {
  const posts = readStore();
  const now = new Date().toISOString().slice(0, 10);
  const newPost: BlogPost = {
    id: Date.now().toString(),
    slug: buildSlug(input, posts),
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    featuredImage: input.featuredImage || "/images/blog/default-post.svg",
    category: input.category,
    tags: input.tags,
    author: { name: input.authorName, role: input.authorRole, avatar: "/images/team/team-1.svg" },
    publishedAt: now,
    updatedAt: now,
    status: input.status,
    seo: {
      metaTitle: input.metaTitle || input.title,
      metaDescription: input.metaDescription || input.excerpt,
      keywords: input.keywords
        ? input.keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : [],
    },
  };
  posts.push(newPost);
  writeStore(posts);
  return newPost;
}

export function updatePost(id: string, input: BlogPostInput): BlogPost | undefined {
  const posts = readStore();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return undefined;

  const existing = posts[idx];
  const updated: BlogPost = {
    ...existing,
    title: input.title,
    slug: buildSlug(input, posts, id),
    excerpt: input.excerpt,
    content: input.content,
    featuredImage: input.featuredImage || existing.featuredImage,
    category: input.category,
    tags: input.tags,
    author: { ...existing.author, name: input.authorName, role: input.authorRole },
    updatedAt: new Date().toISOString().slice(0, 10),
    status: input.status,
    seo: {
      metaTitle: input.metaTitle || input.title,
      metaDescription: input.metaDescription || input.excerpt,
      keywords: input.keywords
        ? input.keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : existing.seo.keywords,
    },
  };
  posts[idx] = updated;
  writeStore(posts);
  return updated;
}

export function deletePost(id: string): boolean {
  const posts = readStore();
  const next = posts.filter((p) => p.id !== id);
  if (next.length === posts.length) return false;
  writeStore(next);
  return true;
}

export function toggleStatus(id: string): BlogPost | undefined {
  const posts = readStore();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return undefined;
  posts[idx] = {
    ...posts[idx],
    status: posts[idx].status === "published" ? "draft" : "published",
  };
  writeStore(posts);
  return posts[idx];
}
