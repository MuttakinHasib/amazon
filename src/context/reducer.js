import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const initialState = {
  carts: [],
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, carts: [...state.carts, action.item] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== action.id),
      };
    default:
      return state;
  }
};
