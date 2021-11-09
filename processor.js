const EventEmitter = require('events');

class OrderProcessor extends EventEmitter {
    placeOrder(orderData) {
        this.emit('PROCESSING_STARTED');
        if (orderData.lineItems.length == 0) {
            this.emit('PROCESSING_FAILED', {
                orderNumber: orderData.orderNumber,
                reason: 'LINEITEMS_EMPTY'
            });
        }
        
        this.emit('PROCESSING_SUCCESS');
    }
};


module.exports = OrderProcessor;