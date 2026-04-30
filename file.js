const fs = require('fs');

/////// read file 
// fs.readFile('./docs/blog1.txt',(err,data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// });

// console.log('last line');

/////// write file 
// fs.writeFile('./docs/blog2.txt','second blog file content here',()=>{
//     console.log('second file msg');
// }) 

////// create folder 
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder removed');
//     })
// }

////// delete files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}