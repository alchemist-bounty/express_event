const EventEmitter = require('events');

class OrderProcessor extends EventEmitter {
    placeOrder(orders) {
        this.emit('PROCESSING_STARTED');
        this.emit('PROCESSING_FAILED');
        this.emit('PROCESSING_SUCCESS');
    }
};


module.exports = OrderProcessor;