<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

type CarrinhoState = {
  itens: Game[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Game } from '../../App'

type CarrinhoState = {
  items: Game[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  // criando um 'slice' do Carrinho e configurando seu estado inicial e reducers
  name: 'carrinho',
  initialState, // estado inicial do carrinho é um array vazio (sem itens no carrinho) já definido acima
  reducers: {
    adicionarItem: (state, action: PayloadAction<Game>) => {
      // reducer para adicionar um item ao carrinho
      const jogo = action.payload //* action.payload contém o jogo a ser adicionado

      if (state.items.find((game) => game.id === jogo.id)) {
        // verifica se o jogo já está no carrinho //* .find retorna o primeiro elemento que satisfaz a condição ou undefined se nenhum for encontrado
        alert('Item já adicionado')
      } else {
        state.items.push(jogo) // adiciona o jogo ao array de itens do carrinho
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
      }
    }
  }
})

<<<<<<< HEAD
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
=======
export const { adicionarItem } = carrinhoSlice.actions // exportando a ação de adicionar item ao carrinho
export default carrinhoSlice.reducer // exportando o reducer do carrinho para ser usado na store
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
