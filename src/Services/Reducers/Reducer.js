import { ADD_TO_CART } from "../constant"
import { REMOVE_TO_CART } from "../constant"
const initialState=
{
cardData:[]
}

export const cardItems=(state=[],action)=>{
    
 // eslint-disable-next-line default-case
 switch(action.type)
 {
    case ADD_TO_CART:
        // console.log("reducer",action)
        return [
            ...state,
            {cardData:action.data}
        ]

        case REMOVE_TO_CART:
        // console.log("reducer",action)
        state.pop()
        return [
            ...state,
          
        ]

        default:
            return state
 }

}

