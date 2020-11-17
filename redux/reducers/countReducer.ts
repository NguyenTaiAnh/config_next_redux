import {Increase,Decrease, DynamicNumber} from '../constaint/type'
const initialState = 0;
export default function(state = initialState,action){
    switch (action.type) {
        case Increase:
            return state + 1
        case Decrease:
            return state - 1
        case DynamicNumber:
            return state + action.payload    
        default:
            return state
    }
}