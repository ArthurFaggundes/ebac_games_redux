import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer // adicionando o reducer do carrinho à store
  }
})

export type RootReducer = ReturnType<typeof store.getState> // tipo que representa o estado raiz da store
