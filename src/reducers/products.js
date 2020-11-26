import { createSlice } from '@reduxjs/toolkit'

const productList = [
  {
    id: '1',
    title: 'Dress',
    item: '👗',
    quantity: '0',
    price: '300'
  },
  {
    id: '2',
    title: 'Hat',
    item: '🎩',
    quantity: '0',
    price: '200'
  },
  {
    id: '3',
    title: 'Shirt',
    item: '👚',
    quantity: '0',
    price: '600'
  },
  {
    id: '4',
    title: 'Jacket',
    item: '🧥',
    quantity: '0',
    price: '830'
  },
  {
    id: '5',
    title: 'Shorts',
    item: '🩳',
    quantity: '0',
    price: '220'
  }, 
  {
    id: '6',
    title: 'Jeans',
    item: '👖',
    quantity: '0',
    price: '340'
  },
  {
    id: '7',
    title: 'High heels',
    item: '👠',
    quantity: '0',
    price: '510'
  },
  {
    id: '8',
    title: 'Cap',
    item: '🧢',
    quantity: '0',
    price: '40'
  }
]

const initialState = {
  productList,
}

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})
export default products