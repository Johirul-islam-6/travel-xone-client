import { configureStore } from '@reduxjs/toolkit'
import masterReducer from '@/redux/reducers/master.reducer'
import { createWrapper  } from 'next-redux-wrapper';
import { authAPi } from './api/auth.api';



 console.log( authAPi)
const makeStore = ()=> configureStore({ 
                                        reducer: masterReducer , 
                                        [authAPi.reducerPath]:authAPi.reducer,
                                        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPi.middleware)
                                      })

export const wrapper = createWrapper(makeStore, {debug: true});