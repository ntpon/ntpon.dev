import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate, sortByTitle } from "../utils"

const files = fs.readdirSync(path.join("posts"))

export function getPosts() {
  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "")

      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      )
      const { data: content } = matter(markdownWithMeta)

      return {
        slug,
        content,
      }
    })
    .filter((post) => post.content.isActive)
  return posts.sort(sortByTitle).sort(sortByDate)
}

export function getPost(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  )
  const { data, content } = matter(markdownWithMeta)
  return {
    data,
    content,
  }
}
