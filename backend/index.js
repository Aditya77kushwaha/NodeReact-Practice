const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello Adi")
})

app.listen(3001, () => {
    console.log("Hello World")
})

// const fs = require('fs');
// var events = require('events');

// fs.rmdir("templates", (err)=>{
//     console.log(err);
// })
// var eventEmitter = new events.EventEmitter();
// eventEmitter.emit('rmdir');
// eventEmitter.on('rmdir', () => {
//   console.log('data received successfully.');
// });

