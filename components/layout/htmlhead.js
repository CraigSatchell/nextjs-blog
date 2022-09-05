import Head from "next/head";

const HtmlHead = (props) => {
  const { title, description } = props;
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" value={description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
  )
}

export default HtmlHead;