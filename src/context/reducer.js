export const initialState = {
  cart: [],
};

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.item] };
    case 'REMOVE_FROM_CART':
      return;
    default:
      return state;
  }
};
