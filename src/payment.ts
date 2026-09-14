import { Payment } from "./types";

export function processPayment(payment: Payment): boolean{
    if(payment.method === "cash"){
        return payment.receivedAmount >= 0;
    }
    if(payment.method === "card"){
        return payment.last4Digit.length === 4;
    }
    if(payment.method === "upi"){
        return payment.transactionId.length > 0;
    }
    return false;
}

