import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Item {
  name: string;
  checked: boolean;
}

export interface ShoppingList {
  id: number;
  items: Item[];
}

export interface FetchShoppingListAction {
  type: ActionTypes.fetchShoppingLists;
  payload: ShoppingList[];
}

const url = 'https://my-json-server.typicode.com/menyen/shopping-list-fe/lists';

export const fetchShoppingLists = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ShoppingList[]>(url);

    dispatch<FetchShoppingListAction>({
      type: ActionTypes.fetchShoppingLists,
      payload: response.data
    });
  }
}