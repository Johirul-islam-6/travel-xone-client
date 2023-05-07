import React from 'react';
import { useRouter } from 'next/router';
import {useContext} from 'react'
import { RootContext } from '@/context/RootContext';
function Private(props) {
  const {user,status} = useContext(RootContext)
  const router = useRouter()
  if(status.loading){ 
                     return( <> 
                            <div className=' grid h-screen place-items-center'>  <div>
                              <h1 className=' text-4xl font-bold text-center'>Loading</h1> 
                              <progress className="progress  w-[50vw]"></progress> </div>
                            </div>
                            </>
 )} 
  if(user){ return props.children}

  else{ router.replace({pathname:'/login'},router.pathname)}
}

export default Private;