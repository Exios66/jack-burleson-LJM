import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../app/interfaces/post'
import Author from '../app/interfaces/author'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: Array<keyof PostType> = []): Partial<PostType> {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Partial<PostType> = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'author') {
      if (typeof data[field] === 'string') {
        items[field] = {
          name: data[field],
          picture: '/assets/blog/authors/default.jpg' // You may want to update this default picture
        }
      } else if (typeof data[field] === 'object') {
        items[field] = data[field] as Author
      }
    } else if (field === 'ogImage') {
      items[field] = { url: data[field] as string }
    } else if (typeof data[field] !== 'undefined') {
      items[field] = data[field] as string
    }
  })

  return items
}

export function getAllPosts(fields: Array<keyof PostType> = []): Partial<PostType>[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1.date || '') > (post2.date || '') ? -1 : 1))
  return posts
}
