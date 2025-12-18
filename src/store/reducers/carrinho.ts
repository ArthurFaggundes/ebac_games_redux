import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Game } from "../../App";

type CarrinhoState = {
  items: Game[];
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({ // criando um 'slice' do Carrinho e configurando seu estado inicial e reducers
  name: 'carrinho',
  initialState, // estado inicial do carrinho é um array vazio (sem itens no carrinho) já definido acima
  reducers: {
    adicionarItem: (state, action: PayloadAction<Game>) => { // reducer para adicionar um item ao carrinho
      const jogo = action.payload; //* action.payload contém o jogo a ser adicionado

      if (state.items.find(game => game.id === jogo.id)) { // verifica se o jogo já está no carrinho //* .find retorna o primeiro elemento que satisfaz a condição ou undefined se nenhum for encontrado
        alert('Item já adicionado');
      } else {
        state.items.push(jogo); // adiciona o jogo ao array de itens do carrinho
      }
    }
  }
})

export const {adicionarItem} = carrinhoSlice.actions; // exportando a ação de adicionar item ao carrinho
export default carrinhoSlice.reducer; // exportando o reducer do carrinho para ser usado na store
