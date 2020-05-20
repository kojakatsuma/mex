const fs = require('fs')
const {DateTime} = require("luxon")

const fileName = `components/mdx/${DateTime.local().toFormat('yyyyMMdd')}.mdx`
const date = `## ${DateTime.local().toFormat('yyyy.MM.dd')}`

fs.appendFileSync(fileName,date,'utf8')
