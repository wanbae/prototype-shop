import Home from "./components/Home";
import Checkout from "./components/Checkout";
import AppStateProvider from "./providers/AppStateProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </Router>
    </AppStateProvider>
  );
}

export default App;
