import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authAPi = createApi({
  reducerPath: 'authAPi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:5000',
     credentials : true
     }),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: () =>  ({
        url: '/auth/login',
        method: 'POST',
        body: {username:'minhaz',password:'123'}
          }),
    }),

    authFetch : builder.query({
      query:'/api/v1/tour'
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAuthLoginMutation , useAuthFetchQuery } = authAPi