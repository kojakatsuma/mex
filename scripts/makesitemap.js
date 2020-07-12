const xml = require('xmlbuilder');
const fs = require('fs');

const readdirRecursively = (dir, files = []) => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = [];
  for (const dirent of dirents) {
    if (dirent.isDirectory()) dirs.push(`${dir}/${dirent.name}`);
    if (dirent.isFile()) files.push(`${dir}/${dirent.name}`);
  }
  for (const d of dirs) {
    files = readdirRecursively(d, files);
  }
  return files;
};

const pages = readdirRecursively('pages')
  .filter((name) => !name.match(/_app|_document|404/))
  .map((name) => name.replace('index', '').replace('pages/', ''))
  .map((name) => name.split('.').slice(0, -1).join())
  .filter((name) => name !== '');

const parent = 'https://mex.busui.org/';
const locs = [{ url: { loc: parent, priority: 0.5 } }];

pages.forEach((page) => {
  locs.push({ url: { loc: `${parent}${page}`, priority: page.match(/whoami|log|(text\/)$/g) ? 0.5 : 1.0 } });
});

const siteMmap = xml
  .create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  })
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
  .ele(locs);

fs.writeFileSync('public/sitemap.xml',siteMmap.end({ pretty: true }))
