const fs = require('fs');
const { DateTime } = require('luxon');

let fileName = `components/mdx/${DateTime.local().toFormat('yyyyMMdd')}.mdx`;
let count = 1;

while (fs.existsSync(fileName)) {
  fileName = `components/mdx/${DateTime.local().toFormat('yyyyMMdd')}-${count}.mdx`;
  count++;
}

const date = `## ${DateTime.local().toFormat('yyyy.MM.dd')}`;

fs.appendFileSync(fileName, date, 'utf8');
