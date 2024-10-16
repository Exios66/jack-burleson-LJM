import Container from "./_components/container";
import { HeroPost } from "./_components/hero-post";
import Intro from "./_components/intro";
import MoreStories from "./_components/more-stories";
import { getAllPosts } from "../lib/api";
import PostType from "./interfaces/post";

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title || ""}
            coverImage={heroPost.coverImage || ""}
            date={heroPost.date || ""}
            author={heroPost.author || { name: "", picture: "" }}
            slug={heroPost.slug || ""}
            excerpt={heroPost.excerpt || ""}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts as PostType[]} />}
      </Container>
    </main>
  );
}
