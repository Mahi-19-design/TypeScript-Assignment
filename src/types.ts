import { CustomerType } from "./customer";

export type foodCategory = "pizza" | "burger" | "drink" | "dessert";

export interface foodItem{
    id : number,
    name: string,
    category: foodCategory,
    price: number,
    isAvailable: boolean
}

export type CartItem = foodItem & {
    quantity : number;
    specialInstructions ?: string;
}

export type OrderType = "pending" | "confirmed" | "cancelled" | "delivered" | "preparing";


export type CashPayment = {
    method : "cash" ;
    receivedAmount : number;
}

export type CardPayment = {
    method : "card";
    last4Digit : string;
}

export type UpiPayment = {
    method  :"upi";
    transactionId : string;
}

export type Payment = CashPayment | CardPayment | UpiPayment;


export type BillSuccess = {
    status : "success";
    orderId : number;
    cutomer : CustomerType;
    cartItem : CartItem[];
    subtotal : number;
    discount : number;
    tax : number;
    finalAmount : number;
    payment : Payment
}

export type BillError = {
    status : "error";
    message : string
}

export type BillStatus = BillSuccess | BillSuccess;
