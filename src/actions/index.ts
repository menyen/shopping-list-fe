import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://mockend.com/menyen/shopping-list-fe/items';

export const fetchShoppingLists = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_LISTS',
      payload: response.data
    });
  }
}