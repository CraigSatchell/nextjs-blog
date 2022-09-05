import HtmlHead from "../components/layout/htmlhead";
import { getSlugs } from "../lib/posts";
import Link from "next/link";

const Home = ({slugs}) => {
  console.log("[HomePage] render");
  const contents = slugs.map((slug, index) => {
    return <li key={index}><Link href={ "posts/" + slug }>{ slug }</Link></li>;
  });
  return (
    <>
      <HtmlHead title="My Blog" description="This is my blog" />
      <h1>My Blog</h1>
      <ul>{contents}</ul>
    </>
  );
};

export async function getStaticProps() {
  const slugs = await getSlugs();
  console.log("[FILES: ", slugs);

  return {
    props: {
      slugs,
    },
  };
}
export default Home;
