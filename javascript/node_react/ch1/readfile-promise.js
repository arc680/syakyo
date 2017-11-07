const fs = require('fs')

function readFilePr (fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      if (err) throw err
      resolve(data)
    })
  })
}

readFilePr('a.txt')
.then((text) => {
  console.log('read a.text', text)
  return readFilePr('b.txt')
})
.then((text) => {
  console.log('read b.text', text)
  return readFilePr('c.txt')
})
.then((text) => {
  console.log('read c.text', text)
})
