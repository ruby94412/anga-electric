import { createContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { Affix, Button } from 'antd';
import Header from './components/Header';
import Main from './pages/Main';
import Design from './pages/Design';
import Services from './pages/Services';
import Debug from './pages/Debug';
import Procurement from './pages/Procurement';
import data from './data.json';
import './App.css';

export const TextData = createContext(data);

function App() {
  return (
    <TextData.Provider value={data}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
            <Route path="design" element={<Design />} />
            <Route path="services" element={<Services />} />
            <Route path="procurement" element={<Procurement />} />
            <Route path="debug" element={<Debug />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TextData.Provider>
  );
}

export default App;
