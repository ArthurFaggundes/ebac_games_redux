import { configureStore } from '@reduxjs/toolkit' // função para configurar a store do Redux

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api' // importando a API criada com RTK Query

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer, // adicionando o reducer do carrinho à store
    [api.reducerPath]: api.reducer // adicionando o reducer da API à store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // adicionando o middleware da API ao pipeline de middleware
})

export type RootReducer = ReturnType<typeof store.getState> // tipo que representa o estado raiz da store
