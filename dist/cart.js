"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCart = addToCart;
exports.removeItem = removeItem;
exports.updateQuantity = updateQuantity;
exports.calculateItemTotal = calculateItemTotal;
exports.calculateSubtotal = calculateSubtotal;
exports.calculateDiscount = calculateDiscount;
exports.calculateTax = calculateTax;
exports.calculateFinalAmount = calculateFinalAmount;
function addToCart(cart, foodItem, quantity, specialInstructions) {
    const existingItem = cart.find(item => item.id === foodItem.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    }
    else {
        cart.push({
            ...foodItem,
            quantity,
            specialInstructions
        });
    }
    return cart;
}
function removeItem(cart, foodItemid) {
    return cart.filter(item => item.id !== foodItemid);
}
function updateQuantity(cart, foodItemId, quantity) {
    const item = cart.find(item => item.id === foodItemId);
    if (item) {
        item.quantity = quantity;
    }
    return cart;
}
function calculateItemTotal(item) {
    return item.price * item.quantity;
}
function calculateSubtotal(cart) {
    return cart.reduce((total, item) => {
        return total + calculateItemTotal(item);
    }, 0);
}
function calculateDiscount(subtotal, customer) {
    let discountPercentage = 0;
    if (customer.type === "member") {
        discountPercentage = customer.discount;
    }
    if (subtotal > 2000) {
        discountPercentage += 5;
    }
    return (subtotal * discountPercentage) / 100;
}
function calculateTax(amountAfterDiscount) {
    return (amountAfterDiscount * 5) / 100;
}
function calculateFinalAmount(subtotal, discount, tax) {
    return subtotal - discount + tax;
}
