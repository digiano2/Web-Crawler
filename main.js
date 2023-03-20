const {crawlPage} = require('./crawl.js')
function main(){
    if (process.argv.length < 3){
        console.log('no website found')
        process.exit(1)
    }
    if (process.argv.length > 3){
        console.log('too mani command lines')
        process.exit(1)
    }
    const baseUrl = process.argv[2]
    console.log(`started crawling ${baseUrl}`)
    crawlPage(baseUrl)
}
main()