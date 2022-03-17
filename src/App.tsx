import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/user";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Scores from "./pages/Scores";
import { Header } from "./components/Header";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
