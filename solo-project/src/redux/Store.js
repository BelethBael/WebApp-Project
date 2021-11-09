import itemReducer from './reducers/itemReducer'
import cartReducer from './reducers/cartReducer'

import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    itemReducer: itemReducer,
    cartReducer: cartReducer
})

const configureStore = createStore(rootReducer)

export default configureStore