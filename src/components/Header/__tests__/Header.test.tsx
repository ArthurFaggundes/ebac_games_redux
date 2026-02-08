// import { Provider } from 'react-redux'
import { screen } from '@testing-library/react'
import Header from '..'

import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elder Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataforma: ['Windows', 'PS5', 'Xbox Series S/X'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
