import './App.css';
import Cart from './components/cart/cart';
import ShoppingContainer from './components/shopping-container/shopping-container';

let App = () => (<div className="App">
  <header className="App-header">Shopping App</header>
  <ShoppingContainer />
  <Cart />
</div>)

export default App