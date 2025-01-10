import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AddBook from "./pages/AddBook.js";
import Dashboard from "./pages/Dashboard.js";
import "./assests/saas/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="addBook" element={<AddBook />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
