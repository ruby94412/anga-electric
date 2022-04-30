import './App.css';

const testAddress = 'https://upload.wikimedia.org/wikipedia/commons/3/36/Alexandra_Daddario_%2816871413889%29_%28cropped%29.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={testAddress} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
