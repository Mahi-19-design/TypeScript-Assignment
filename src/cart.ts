import { CartItem , foodItem } from "./types";
import { CustomerType } from "./customer";

export function addToCart(
    cart: CartItem[],
    foodItem: foodItem,
    quantity: number,
    specialInstructions?: string
): CartItem[]{
    const existingItem = cart.find(item => item.id === foodItem.id);
    if(existingItem){
        existingItem.quantity +=  quantity;
    }
else{
    cart.push({
        ...foodItem,
        quantity,
        specialInstructions
    })
}
return cart;
}


export function removeItem(
    cart: CartItem[],
    foodItemid: number
):CartItem[]{
    return cart.filter(item => item.id !== foodItemid);
}

export function updateQuantity(
    cart: CartItem[],
    foodItemId: number,
    quantity: number
):CartItem[]{
    const item = cart.find(item => item.id === foodItemId);
    if(item){
        item.quantity = quantity;
    }
    return cart;
}


export function calculateItemTotal(item : CartItem):number{
    return item.price * item.quantity;
}

export function calculateSubtotal(cart: CartItem[]): number{
    return cart.reduce((total , item) => {
        return total + calculateItemTotal(item);
    },0);
}

export function calculateDiscount(
    subtotal: number,
    customer: CustomerType
):number {
    let discountPercentage = 0;
    if(customer.type === "member"){
        discountPercentage = customer.discount;
    }
    if(subtotal > 2000){
        discountPercentage += 5;
    }
    return (subtotal * discountPercentage) /100;
}


export function calculateTax(amountAfterDiscount: number):number{
    return (amountAfterDiscount * 5)/100;
}

export function calculateFinalAmount(
    subtotal: number,
    discount: number,
    tax: number
): number{
    return subtotal - discount + tax;
}

