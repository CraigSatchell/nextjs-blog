import Head from "next/head";

const HtmlHead = (props) => {
  return (
    <>
    <Head>
        <title>{props.title}</title>
        <meta name="description" value={props.description} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    </>
  )
}

export default HtmlHead;