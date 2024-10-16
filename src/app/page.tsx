import Container from "../../morningstar-developments/src/app/_components/container";
import { HeroPost } from "../../morningstar-developments/src/app/_components/hero-post";
import Intro from "../../morningstar-developments/src/app/_components/intro";
import MoreStories from "../../morningstar-developments/src/app/_components/more-stories";
import { getAllPosts } from "../../morningstar-developments/src/lib/api";
import Author from '../../morningstar-developments/src/app/interfaces/author';
import Post from '../../morningstar-developments/src/app/interfaces/post';

export default async function Home() {
  const allPosts = await getAllPosts();
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
            author={heroPost.author ?? { id: '', name: '', picture: '' } as Author}
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
          excerpt: post.excerpt ?? '',
          author: post.author ?? { id: '', name: '', picture: '' } as Author
        }))} />}
      </Container>
    </main>
  );
}
