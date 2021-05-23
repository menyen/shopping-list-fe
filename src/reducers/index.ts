import { combineReducers } from 'redux';
import { shoppingListReducer } from './shoppingLists';
import { ShoppingList } from '../actions';

export interface StoreState {
  shoppingLists: ShoppingList[];
}

export const reducers = combineReducers<StoreState>({
  shoppingLists: shoppingListReducer
});