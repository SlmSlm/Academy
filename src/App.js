import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
      </header>
    </div>
  );
}

export default App;