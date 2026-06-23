import { BlogPost } from "@/types/blog";
import { seedPosts } from "@/data/seed-posts";

/**
 * In-memory store (Edge compatible)
 * NOTE: resets on deploy/restart
 */

let posts: BlogPost[] = [...seedPosts];

export function readStore(): BlogPost[] {
  return posts;
}

export function writeStore(updated: BlogPost[]): void {
  posts = updated;
}
