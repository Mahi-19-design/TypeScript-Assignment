import { OrderType } from "./types";

export function updateOrderStatus(status: OrderType): OrderType{
    switch(status){
        case "pending":
            return "confirmed";
            case "confirmed":
                return "preparing";
             case "preparing":
                return "delivered";
            case "delivered":
                return "delivered";
                case "cancelled":
                    return "cancelled";

                    default:
                        return "pending";
    }
}