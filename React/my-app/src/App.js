 import './App.css';
import Welcome from './Welcome';

//<Welcome /> Component

function App() {
  return (
    <div className="App">
       <header className="App-header">
              <h1>This is my First Component</h1>
              <Welcome />  
       </header>
    </div>
  );
}

export default App;
