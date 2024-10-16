import { PostPreview } from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={{
              name: post.author.name ?? '',
              picture: post.author.picture ?? '',
              id: post.author.id ?? '',
              bio: post.author.bio ?? '',
              email: post.author.email ?? '',
              socialMedia: post.author.socialMedia ?? {},
              website: post.author.website ?? '',
              articles: post.author.articles ?? [],
              expertise: post.author.expertise ?? [],
              joinDate: post.author.joinDate ?? new Date(),
              lastActive: post.author.lastActive ?? new Date(),
              isVerified: post.author.isVerified ?? false,
              role: post.author.role ?? 'contributor',
              preferences: post.author.preferences ?? {
                notifications: false,
                newsletter: false,
                publicProfile: false
              }
            }}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
