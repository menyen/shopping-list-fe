import { FetchShoppingListAction } from './shoppingLists';

export enum ActionTypes {
  fetchShoppingLists
}

// we can combina all the actions for shopping list here
export type Action = FetchShoppingListAction;