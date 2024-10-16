import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import Intro from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title ?? ''}
            coverImage={heroPost.coverImage ?? ''}
            date={heroPost.date ?? ''}
            author={heroPost.author ?? { name: '', picture: '' }}
            slug={heroPost.slug ?? ''}
            excerpt={heroPost.excerpt ?? ''}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts.map(post => ({
          ...post,
          title: post.title ?? '',
          date: post.date ?? '',
          coverImage: post.coverImage ?? '',
          ogImage: post.ogImage ?? { url: '' },
          content: post.content ?? '',
          ...post,
          slug: post.slug ?? '',
          author: post.author ?? { name: '', picture: '' },
          excerpt: post.excerpt ?? ''
        }))} />}
      </Container>
    </main>
  );
}
