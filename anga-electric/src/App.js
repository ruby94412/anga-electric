import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Main from './pages/Main';
import Design from './pages/Design';
import Services from './pages/Services';
import Deposition from './pages/Deposition';
import Procurement from './pages/Procurement';
function App() {
  return (
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
          <Route path="deposition" element={<Deposition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
