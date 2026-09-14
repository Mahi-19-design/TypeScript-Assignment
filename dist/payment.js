"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPayment = processPayment;
function processPayment(payment) {
    if (payment.method === "cash") {
        return payment.receivedAmount >= 0;
    }
    if (payment.method === "card") {
        return payment.last4Digit.length === 4;
    }
    if (payment.method === "upi") {
        return payment.transactionId.length > 0;
    }
    return false;
}
