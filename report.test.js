const {sortPages} = require('./report.js')
const {test, expect} = require('@jest/globals')

test('sortPages', () =>{
    const input = {'https://blog.boot.dev' : 3,
    'https://blog.boot.dev/path': 5}
    const actual = sortPages(input)
    const expected = [['https://blog.boot.dev/path', 5],
        ['https://blog.boot.dev', 3]
    ]
    expect(actual).toEqual(expected)  
})