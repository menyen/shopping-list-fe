import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Item {
  name: string;
  check: boolean;
}

export interface ShoppingList {
  id: number;
  items: Item[];
}

export interface FetchShoppingListAction {
  type: ActionTypes.fetchShoppingLists;
  payload: ShoppingList[];
}

const url = 'http://localhost:10000/lists';

export const fetchShoppingLists = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ShoppingList[]>(url);

    dispatch<FetchShoppingListAction>({
      type: ActionTypes.fetchShoppingLists,
      payload: response.data
    });
  }
}