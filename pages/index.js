import Head from "next/head";
import Link from "next/link";
import { getSlugs } from "../lib/posts";

export async function getStaticProps() {
  const postsList = await getSlugs();

  return {
    props: {
      postsList,
    },
  };
}

function formatString(inputString) {
  const words = inputString.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

function HomePage({ postsList }) {
  console.log("[HomePage] render");

  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {postsList.map((post) => {
            return (
              <li key={post}>
                <Link href={`/posts/${post}`}>{formatString(post)}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
