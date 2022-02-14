import { BrowserRouter } from "react-router-dom";

import "./App.css";
import AppRouter from "./ui/boot/router";
// import Header from "./ui/components/common/header";

// import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
