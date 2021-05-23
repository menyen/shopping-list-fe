import {
  ActionTypes,
  ShoppingList,
  Action
} from '../actions';

export const shoppingListReducer = (
  state: ShoppingList[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchShoppingLists:
      return action.payload;
    default:
      return state;
  }
};