import './App.css';
import Restaurants from './components/restaurants/restaurants';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux';

export default function App() {
  const restaurants = createStore(() => ({
    biryani: [{
      id: 1001,
      name: 'New Kudla',
      address: 'Ashok Nagar, Mangalore',
      cuisines: ['North Indian', 'Chinese', 'Seafood', 'Shake'],
      menu: '/assets/new-kudla'
    }, {
      id: 1002,
      name: "Shetty's Kori Rotti",
      address: 'Kodailbail, Mangalore',
      cuisines: ['North Indian', 'South Indian', 'Chinese'],
      menu: '/assets/kori-rotti'
    }],
    thali: [{
      id: 2001,
      name: "Machli",
      address: 'Kodailbail, Mangalore',
      cuisines: ['Seafood', 'Mangalorean', 'South Indian'],
      menu: '/assets/machli'
    }],
    pizza: [{
      id: 3001,
      name: "Dominos Pizza",
      address: 'Kankanady, Mangalore',
      cuisines: ['Pizza', 'Fast Food', 'Desserts', 'Italian', 'Pasta'],
      menu: '/assets/dominos'
    }],
    chinese: [{
      id: 4001,
      name: "New Hao Hao",
      address: 'Bendoor, Mangalore',
      cuisines: ['Chinese', 'Asian', 'Sichuan'],
      menu: '/assets/hao-hao'
    }]
  }))

  return <div className="App">
    <header className="App-header">Zomato</header>
    <Provider store={restaurants}>
      <Restaurants />
    </Provider>
  </div>
}