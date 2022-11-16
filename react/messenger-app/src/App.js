import './App.css';
import Header from './Header';
import Footer from './Footer';
import MessageContainer from './components/message-container/message-container';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <MessageContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;