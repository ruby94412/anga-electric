import {createContext, useRef} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {Affix, ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import {MessageOutlined} from '@ant-design/icons';
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
  const modalRef = useRef();
  const handleMessageIconClick = () => {
    modalRef.current.openModal();
  }
  return (
    <TextData.Provider value={data}>
      <ConfigProvider locale={zh_CN}>
        <div className="App">
          <BrowserRouter>
            <Affix className="affix-position">
              <MessageOutlined className="message-icon" onClick={handleMessageIconClick} />
            </Affix>
            <Header ref={modalRef} />
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
      </ConfigProvider>
    </TextData.Provider>
  );
}

export default App;
