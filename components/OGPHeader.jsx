import Head from 'next/head'

export const OGPHeader = ({ url, title, description, image }) => {
    return (
        <Head>
            <title key='title'>{title} - mex.busui.org</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@keihin194" />
            <meta name="twitter:creator" content="@keihin194" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || title} />
            <meta property="og:image" content={image || 'https://mex.busui.org/favicon.ico'} />
        </Head>
    )
}
