const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('-------------chunk-------------')
//     // console.log(chunk)
//     writeStream.write('\n------------chunk-------------\n')
//     writeStream.write(chunk)
// })

// readStream.on('end', () => {
//     console.log('finished')
// })

readStream.pipe(writeStream)