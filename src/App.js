// import Home from "./Components/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/Router/Router";
import RouterOutlet from "./Components/Router/RouterOutlet";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
        <RouterOutlet />
      </Router>
    </div>
  );
}

export default App;
