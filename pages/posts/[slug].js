import HtmlHead from "../../components/layout/htmlhead";
import { getPost, getSlugs } from "../../lib/posts";

const PostDetails = ({ post }) => {
  return (
    <>
      <HtmlHead title="Post Details | My Blog" />
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: post.body }} />
    </>
  );
};

export async function getStaticPaths() {
  console.log("[SLUGS]: ", await getSlugs());
  const files = await getSlugs();
  const slugs = files.map((file) => {
    return { params: { slug: file } };
  });

   return {
    paths: slugs,
    fallback: false,
  };
}


export async function getStaticProps(context) {
  console.log("[CONTEXT]: ", context);
  const {
    params: { slug },
  } = context;
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
}

export default PostDetails;
