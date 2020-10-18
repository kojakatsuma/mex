import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

const template = (paths: { loc: string; priority: number }[]) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths.map(({ loc, priority }) => `
        <url>
            <loc>https://mex.busui.org${loc}</loc>
            <priority>${priority}</priority>
        </url>`).join('\n')}
    </urlset>
    `
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const staticPaths = [
        { loc: '/', priority: 0.5 },
        { loc: '/log', priority: 0.5 },
        { loc: '/text', priority: 0.5 },
        { loc: '/whoami', priority: 0.5 }]
    const data: { id: string; Name: string }[] = await fetch(
        'https://notion-api.splitbee.io/v1/table/ab46b7d1f5ce4bc48588c475b2682624',
    ).then((response: Response) => response.json());
    const paths = staticPaths.concat(data.map((_, i) => ({ loc: `/text/${data.length - i}`, priority: 1 })));
    res.setHeader('content-type', 'application/xml');
    res.write(template(paths))
    res.end()
    return { props: {} }
}

const sitemap = () => null
export default sitemap