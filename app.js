var express = require('express');
var app=express();
const path = require('path');
const fs =require('fs');

// let rawdata = fs.readFileSync(path.resolve(__dirname, 'student.json'));
// const students = JSON.parse(rawdata);

// console.log(students);

// app.use('/', require('./routes/index'));
// app.use('/users', require('./routes/users'));
const OrderProcessor = require('./processor');

const orderProcessor = new OrderProcessor();
orderProcessor.on('PROCESSING_STARTED', () => {
    console.log('PROCESSING_STARTED Fired');
});

orderProcessor.on('PROCESSING_FAILED', () => {
    console.log('PROCESSING_FAILED Fired');
});

orderProcessor.on('PROCESSING_SUCCESS', () => {
    console.log('PROCESSING_SUCCESS Fired');
});

orderProcessor.placeOrder({});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('App is listeneing at %s:%s', host, port);
})