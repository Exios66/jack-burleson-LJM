import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import { CMS_NAME } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import { Author } from "../../interfaces/author";

type SimplifiedAuthor = Pick<Author, 'name' | 'picture'>

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const defaultAuthor: SimplifiedAuthor = {
    name: "Unknown Author",
    picture: "",
  };

  const author: SimplifiedAuthor = post.author
    ? { name: post.author.name, picture: post.author.picture }
    : defaultAuthor;

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title || "Untitled"}
            coverImage={post.coverImage || ""}
            date={post.date || ""}
            author={author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  if (!post) {
    return notFound();
  }

  const title = `${post.title || "Untitled"} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: post.ogImage?.url ? [post.ogImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug ?? '',
  }));
}
