import { combinarReducers } from 'redux'
import Products from './products'

const rootReducer = combinarReducer({
    products: Products
})
export default rootReducer