import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../hooks/hook.axios'

const AUTHSIGNIN = createAsyncThunk('auth/login',async(user)=>{
 
  const response = await axios.post('/auth/login',user)
  return response.data

})
const AUTHSIGNIUP = createAsyncThunk('auth/register',async(user,thuk)=>{
  
    const response = await axios.post('/auth/register',user)
    return response
 
})

// const AUTHSIGNIUP = createAsyncThunk('auth/register',async(user, {dispatch, getState, rejectWithValue, fulfillWithValue}) => {
//   try{
//       const response = await axios.post('/auth/register',user);
//       if (!response.ok) {
//           return rejectWithValue(response.status)
//       }
//       const data = await response.json();
//       return fulfillWithValue(data)
//   }catch(error){
//       throw rejectWithValue(error.message)
//   }
// })


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
     data:null,
     isSuccess: false,
     loading: false,
     error:null
    
  },
  reducers: {
        increment: state => {
          state.data = { name:"minhaz"}
        },
  },
  extraReducers:{
    [AUTHSIGNIN.rejected]:(state,action)=>{
      state.loading = false,
      state.isSuccess = false,
      state.data = null,
      state.error = action.error
    },
    [AUTHSIGNIN.pending]: (state, action) => {
      state.loading = true
      state.isSuccess = false
    },
    [AUTHSIGNIN.fulfilled]: (state, action) => {
      state.loading = false,
      state.isSuccess = true,
      state.data = action.payload,
      state.error = null
    },
// ==================== AUTHSIGNIUP =========================  
    [AUTHSIGNIUP.rejected]:(state,action)=>{
      state.loading = false,
      state.isSuccess = false,
      state.data = null,
      state.error = action.error
    },
    [AUTHSIGNIUP.pending]:(state,action)=>{
      state.loading = true,
      state.isSuccess = false
    },
    [AUTHSIGNIUP.fulfilled]:(state,action)=>{
      state.loading = false,
      state.isSuccess = true,
      state.data = action.payload,
      state.error = null
    },
  }
})

export {AUTHSIGNIN , AUTHSIGNIUP }
export const { increment } = authSlice.actions

export default authSlice.reducer