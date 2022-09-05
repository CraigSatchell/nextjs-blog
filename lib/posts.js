import { readdir, readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8");
  const { data, content } = matter(source);
  const html = marked(content);
  return {
    date: data.date,
    title: data.title,
    body: html,
  };
}


export async function getSlugs() {
  const files = await readdir("content/posts");
  const extension = '.md';
  return files
    .filter((file) => file.endsWith(extension))
    .map((file) => file.slice(0, -extension.length));
}


