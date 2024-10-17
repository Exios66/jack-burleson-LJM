import Container from "./_components/container";
import { HeroPost } from "./_components/hero-post";
import Intro from "./_components/intro";
import MoreStories from "./_components/more-stories";
import { getAllPosts } from "../lib/api";
import PostType from "./interfaces/post";
import { Author } from "./interfaces/author";

type SimplifiedAuthor = Pick<Author, 'name' | 'picture'>

export default function Home() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  const defaultAuthor: SimplifiedAuthor = {
    name: "Unknown Author",
    picture: "",
  };

  const getSimplifiedAuthor = (author: Author | undefined): SimplifiedAuthor => {
    if (!author) return defaultAuthor;
    return {
      name: author.name,
      picture: author.picture
    };
  };

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title || ""}
            coverImage={heroPost.coverImage || ""}
            date={heroPost.date || ""}
            author={getSimplifiedAuthor(heroPost.author)}
            slug={heroPost.slug || ""}
            excerpt={heroPost.excerpt || ""}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts as PostType[]} />}
      </Container>
    </main>
  );
}
