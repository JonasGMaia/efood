import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Card } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Card[], void>({
      query: () => 'restaurantes'
    }),
    getRestauranteId: builder.query<Card, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestauranteIdQuery } = api
export default api
