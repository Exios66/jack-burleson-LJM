import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from '../app/interfaces/post'
import { Author } from '../interfaces/author'
// Remove the import for getAuthorData as it's not found
// import { getAuthorData } from './authorData'

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
          id: 'default-id',
          name: data[field],
          picture: '/assets/blog/authors/default.jpg',
          bio: '',
          email: '',
          socialMedia: {
            twitter: '',
            linkedin: '',
            github: '',
            medium: ''
          },
          articles: [],
          expertise: [],
          joinDate: new Date(),
          lastActive: new Date(),
          isVerified: false,
          role: 'contributor',
          preferences: {
            notifications: false,
            newsletter: false,
            publicProfile: false
          }
        } as Author
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

export function getAuthorBySlug(slug: string) {
  const authorData = getPostSlugs().map(slug => getPostBySlug(slug, ['author']));
  const author = authorData.find(post => post.author && (post.author as Author).name === slug);
  if (!author || !author.author) {
    throw new Error(`Author with slug ${slug} not found`);
  }
  return author;
}
