export interface Customer{
    id: number,
    name: string,
    phone?: string,
    address: string
}

export type Guest = Customer & {
    type:"guest"
}

export type Membership = "silver" | "gold" | "platinum"

export type Member = Customer & {
    type: "member",
    id: number,
    discount : number,
    level : Membership
}

export type CustomerType = Guest  | Member;
