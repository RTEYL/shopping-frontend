const initialState = {
  category: '',
  brand: '',
  name: '',
  description: '',
  price: null
}

export default function itemsReducer(state = initialState, { type, payload }) {
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}
