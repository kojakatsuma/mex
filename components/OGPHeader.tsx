import Head from 'next/head';

interface Props {
  url: string;
  title: string;
  image?: string;
  metaDescription?: string;
}

export const OGPHeader = ({ url, title, image, metaDescription = '' }: Props) => {
  return (
    <Head>
      <title key='title'>{title} - mex.busui.org</title>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@keihin194' />
      <meta name='twitter:creator' content='@keihin194' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription || title} />
      <meta property='og:image' content={image || 'https://mex.busui.org/favicon.ico'} />
      {metaDescription && <meta name='description' content={metaDescription} />}
    </Head>
  );
};
