interface BlogPostParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostParams;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};
