const {normalizeURL, getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocols', () =>{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)  
})

test('normalizeURL strip trailing /', () =>{
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)  
})
test('normalizeURL  capitals', () =>{
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)  
})
test('normalizeURL strip http', () =>{
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)  
})
test('getURLsFromHTML absolute', () =>{
    const inputHtmlBody = `<html>
    <body>
    <a href = "https://blog.boot.dev/">
    blog.boot.dev
    </a>
    </body>
    </html>
    `
    const inputBaseUrl = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHtmlBody, inputBaseUrl)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected)  
})

test('getURLsFromHTML both', () =>{
    const inputHtmlBody = `<html>
    <body>
    <a href = "https://blog.boot.dev/path1/">
    blog.boot.dev
    </a>
    <a href = "/path2/">
    blog.boot.dev
    </a>
    </body>
    </html>
    `
    const inputBaseUrl = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHtmlBody, inputBaseUrl)
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)  
})

test('getURLsFromHTML relative', () =>{
    const inputHtmlBody = `<html>
    <body>

    <a href = "/path/">
    blog.boot.dev
    </a>
    </body>
    </html>
    `
    const inputBaseUrl = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHtmlBody, inputBaseUrl)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)  
})
test('getURLsFromHTML invalid', () =>{
    const inputHtmlBody = `<html>
    <body>

    <a href = "invalid">
    invalid
    </a>
    </body>
    </html>
    `
    const inputBaseUrl = "https://blog.boot.dev"
    const actual = getURLsFromHTML(inputHtmlBody, inputBaseUrl)
    const expected = []
    expect(actual).toEqual(expected)  
})
