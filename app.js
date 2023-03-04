// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', function (err, data) {
//  if (err) throw err;
//  console.log(data);
// });

const fs = require('fs');
fs.writeFile('file.txt', 'Hello World!', function (err) {
 if (err) throw err;
 console.log('File saved!');
});

// Creating a web server:

const http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Hello World!');
 res.end();
}).listen(8080);

// Making an HTTP request:

const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
 let data = '';
 resp.on('data', (chunk) => {
 data += chunk;
 });
 resp.on('end', () => {
 console.log(JSON.parse(data));
 });
}).on('error', (err) => {
 console.log("Error: " + err.message);
});

// Using a module
const myModule = require('./my-module.js');
console.log(myModule.myFunction());

// Promises
const myPromise = new Promise((resolve, reject) => {
 if (condition) {
 resolve('Success!');
 } else {
 reject('Failure!');
 }
});
myPromise.then((result) => {
 console.log(result);
}).catch((error) => {
 console.log(error);
});

// Async/Await
async function myFunction() {
 try {
 const result = await myPromise;
 console.log(result);
 } catch (error) {
 console.log(error);
 }
}
myFunction();