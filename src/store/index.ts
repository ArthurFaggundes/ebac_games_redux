<<<<<<< HEAD
import {
  combineReducers,
  configureStore as configureToolkitStore,
  PreloadedState
} from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureToolkitStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
=======
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
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
