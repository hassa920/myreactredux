import { ADD_TO_CART } from "../constant"
import { REMOVE_TO_CART } from "../constant"
export const addToCart=(data)=>
{
    // console.log("action",data)
    return {
        type: ADD_TO_CART,
        data:data
    }
}

export const removeToCart=()=>
    {
        console.log("action")
        return {
            type: REMOVE_TO_CART,
           
        }
    }