import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000' // base URL do API
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      // endpoint para buscar os jogos[]
      query: () => 'produtos' // endpoint para buscar os produtos
    })
  })
})

export const { useGetJogosQuery } = api

export default api
