import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" />
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
