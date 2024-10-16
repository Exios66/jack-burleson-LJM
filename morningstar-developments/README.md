# Morningstar Developments Blog

This is a blog for Morningstar Developments built with [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Blog Posts

Blog posts are stored as Markdown files in the `_posts` directory. To add a new blog post, create a new .md file in this directory with the following format:

```markdown
---
title: 'Your Blog Post Title'
excerpt: 'A brief excerpt of your blog post'
coverImage: '/assets/blog/your-post/cover.jpg'
date: '2023-05-16T05:35:07.322Z'
author:
  name: Your Name
  picture: '/assets/blog/authors/your-picture.jpg'
ogImage:
  url: '/assets/blog/your-post/cover.jpg'
---

Your blog post content goes here...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy your blog:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up or log in.
3. Click on "New Project" and select your GitHub repository.
4. Follow the steps in the Vercel UI to deploy your project.

Vercel will automatically detect that you're using Next.js and set up the build configuration for you.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
