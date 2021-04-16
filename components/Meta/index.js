import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width' />
      <meta
        name='description'
        content='A community based organisation that strives to support our communitry through several programs'
      />
      <meta property='og:title' content='Community' />
      <meta
        property='og:description'
        content='A community based organisation that strives to support our communitry through several programs'
      />
      <meta property='og:image' content='favicon-32x32.png' />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='theme-color' content='#020102' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <title>Community</title>
    </Head>
  );
};

export default Meta;
