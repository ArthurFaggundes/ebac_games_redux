import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
<<<<<<< HEAD

=======
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
=======
    baseUrl: 'http://localhost:4000' // base URL do API
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      // endpoint para buscar os jogos[]
      query: () => 'produtos' // endpoint para buscar os produtos
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
    })
  })
})

export const { useGetJogosQuery } = api

export default api
