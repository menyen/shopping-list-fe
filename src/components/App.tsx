import React from 'react';
import { connect } from 'react-redux';
import { Item, ShoppingList, fetchShoppingLists } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  shoppingLists: ShoppingList[];
  fetchShoppingLists(): any;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchShoppingLists();
  }

  renderList(): JSX.Element[] {
    return this.props.shoppingLists.map((shoppingList: ShoppingList) => {
      return (
        <div key={shoppingList.id}>
          <p>{shoppingList.id}</p>
          <ul>
            {shoppingList.items.map((item: Item): JSX.Element => (
              <li key={item.name}>
                {item.name} - {item.check.toString()}
              </li>
            ))}
            
          </ul>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (
  { shoppingLists }: StoreState
): { shoppingLists: ShoppingList[] } => {
  return {
    shoppingLists
  };
};

export const App = connect(
  mapStateToProps,
  { fetchShoppingLists }
)(_App)