import "server-only";
import fs from "fs";
import path from "path";
import { BlogPost } from "@/types/blog";
import { seedPosts } from "@/data/seed-posts";

/**
 * Local file-based data store for blog posts.
 *
 * This module is the single place that knows posts live in a JSON file on
 * disk. Every other part of the app (pages, API routes, dashboard) goes
 * through `src/lib/posts.ts`, so swapping this file-based implementation for
 * a real database or CMS later only requires changing this file.
 */

const DATA_DIR = path.join(process.cwd(), "src", "content");
const DATA_FILE = path.join(DATA_DIR, "posts.json");

function ensureStore(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(seedPosts, null, 2), "utf-8");
  }
}

export function readStore(): BlogPost[] {
  ensureStore();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  try {
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return seedPosts;
  }
}

export function writeStore(posts: BlogPost[]): void {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
}
