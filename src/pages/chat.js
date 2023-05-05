import Private from '@/private/private.route';
import React, { useState } from 'react';


function chat(props) {
  


 

  return (
    <Private> 
    <div>

      this is chat page with soket   io <br />

      <input onChange={(e) => setMessage(e.target.value)} type="text" name='message' placeholder='massage...' />
      <button > Send </button>

    </div>
  </Private>
  );
}

export default chat;