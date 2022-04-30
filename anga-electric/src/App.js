import './App.css';

const testAddress = 'https://static.theprint.in/wp-content/uploads/2022/02/egfefrrrrrure20220jj22412412620220224134547.jpg?compress=true&quality=80&w=800&dpr=2.0'
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
