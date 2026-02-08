import { useSelector } from 'react-redux'
<<<<<<< HEAD
import { RootState } from '@reduxjs/toolkit/query'

import * as S from './styles'
=======

import * as S from './styles'

>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

<<<<<<< HEAD
const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

=======
// type Props = {
//   itensNoCarrinho: Game[]
// }

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.items)

>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
<<<<<<< HEAD
        <div>
          <span data-testid="qtd-carrinho">{itens.length} itens</span>, valor
          total: {paraReal(valorTotal)}
        </div>
=======
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
>>>>>>> e1ddb7a5f1f01b58ec39b06a807bd161af6af537
      </div>
    </S.Header>
  )
}

export default Header
