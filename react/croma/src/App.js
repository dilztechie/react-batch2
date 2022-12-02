import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './App.css';
import Products from './components/products/products';

const store = createStore(() => ({
  mobiles: [{
    brand: 'OnePlus',
    model: '10T 5G',
    display: '6.7 inches (17.02 cm), Fluid AMOLED, 120 Hz Refresh Rate',
    memory: '12GB RAM, 256GB ROM',
    processor: 'Snapdragon 8+ Gen 1 Mobile Platform, Octa Core',
    camera: '50MP + 8MP + 2MP Triple Rear & 16MP Front Camera',
    battery: '4800 mAh with 150W Fast Charging'
  }],
  televisions: [{
    brand: 'LG',
    model: 'C2 106 cm (42 inch) 4K Ultra HD OLED WebOS TV',
    display: 'OLED Ultra HD 4K, 3840 x 2160 pixels, 120 Hz Refresh Rate',
    connectivity: '4 HDMI | 3 USB | Wi-Fi',
    os: 'WebOS',
    apps: 'Netflix, Prime Video, YouTube, Disney+ Hotstar, Apple TV+',
    sound: '20 W Speaker, Dolby Atmos',
    features: 'Seamless Screen, Dolby Vision IQ, α9 Gen 5 AI Processor, Voice Assistance'
  }],
  laptops: [{
    brand: 'Dell',
    model: 'XPS 13',
    display: '33.02cm (13.0") FHD',
    memory: '16GB LPDDR4X RAM, 1TB SSD ROM',
    processor: 'Intel Core i7 12th Gen',
    os: 'Windows 11 Pro',
    graphics: 'Intel Iris Xe Graphics'
  }]
}))

export default function App() {
  return <div className="App">
    <header className="App-header">Croma</header>
    <Provider store={store}>
      <Products />
    </Provider>
  </div>
}

