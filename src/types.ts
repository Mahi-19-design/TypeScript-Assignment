export type foodCategory = "pizza" | "burger" | "drink" | "dessert";

export interface foodItem{
    id : number,
    name: string,
    category: foodCategory,
    price: number,
    isAvailable: boolean
}

