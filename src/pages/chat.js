import Private from '@/private/private.route';
import React, { useState , useEffect } from 'react';
import axios from  '../../hooks/hook.axios'

function chat(props) {
  
  useEffect(()=>{
    axios.get('/login',).then(res=>{
      console.log("data =>" , res.data)
    })
  })

 

  return (
    // <Private> 
    <div>

      this is chat page with soket   io <br />

      <input onChange={(e) => setMessage(e.target.value)} type="text" name='message' placeholder='massage...' />
      <button > Send </button>

    </div>
  // </Private>
  );
}

export default chat;