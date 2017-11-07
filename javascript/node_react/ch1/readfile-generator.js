const fs = require('fs')

function readFileGfn (g, fname) {
  fs.readFile(fname, 'utf-8', (err, data) => {
    if (err) throw err
    g.next(data)
  })
}

const g = (function * () {
  const a = yield readFileGfn(g, 'a.txt')
  console.log(a)
  const b = yield readFileGfn(g, 'b.txt')
  console.log(b)
  const c = yield readFileGfn(g, 'c.txt')
  console.log(c)
})()
g.next()
