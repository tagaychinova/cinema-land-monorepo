interface Post {
  id: string;
  title: string;
  content: string;
}

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');

  const currentdate = new Date();

  const datetime =
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

  console.log('generateStaticParams' + ' ' + datetime);

  const posts: Post[] = await data.json();
  return (
    <main>
      <h1>Blog Posts {datetime}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
