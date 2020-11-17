import {Increase,Decrease} from '../constaint/type'
const initialState = 0;
export default function(state = initialState,action){
    switch (action.type) {
        case Increase:
            return state + 4
        case Decrease:
            return state - 5
        default:
            return state
    }
}