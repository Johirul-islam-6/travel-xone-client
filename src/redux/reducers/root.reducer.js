import { combineReducers } from 'redux'
import authSlice from '../slices/auth.slice'
import { authAPi } from '../api/auth.api'



const rootReducer = combineReducers({
  auth:authSlice,
 
 
})

export default rootReducer