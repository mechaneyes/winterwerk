import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/usd2ygm.css"></link>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:url" content="https://winterwerk.one/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="WinterWerk" key="title" />
      <meta
        property="og:description"
        content="Reflections on art and tech via Ray Weitzenberg"
      />
      <meta
        property="og:image"
        content="https://wp.winterwerk.one/wordpress/wp-content/uploads/2023/08/winterwerk-og.png"
        key="og-image"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="winterwerk.one" />
      <meta property="twitter:url" content="https://winterwerk.one/" />
      <meta name="twitter:title" content="WinterWerk" />
      <meta
        name="twitter:description"
        content="Reflections on art and tech via Ray Weitzenberg"
      />
      <meta
        name="twitter:image"
        content="https://wp.winterwerk.one/wordpress/wp-content/uploads/2023/08/winterwerk-og.png"
      />
    </Head>
  );
}
