import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/greeting';
import Store from './redux/configureStore';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
