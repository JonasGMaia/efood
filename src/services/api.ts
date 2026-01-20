import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Card } from '../pages/Home'

// type Product = {
//   id: number
//   price: number
// }

// type PurchasePayload = {
//   products: Product[]
//   delivery: {
//     receiver: string
//     address: {
//       description: string
//       city: string
//       zipCode: string
//       number: number
//       complement: string
//     }
//   }
//   payment: {
//     card: {
//       name: string
//       number: string
//       code: number
//       expires: {
//         month: number
//         year: number
//       }
//     }
//   }
// }

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, any>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestauranteIdQuery,
  usePurchaseMutation
} = api
export default api
