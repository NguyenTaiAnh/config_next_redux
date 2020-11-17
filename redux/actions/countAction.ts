import {Increase, Decrease, DynamicNumber} from '../constaint/type'
export const countIncrement = () => ({
    type: Increase
})
export const countDecrement = () => ({
    type: Decrease
})
export const countDynamicNumber = (number) => ({
    type: DynamicNumber,
    payload: number
})
