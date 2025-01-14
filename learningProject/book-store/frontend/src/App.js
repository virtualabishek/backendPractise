import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AddBook from "./pages/AddBook.js";
import Dashboard from "./pages/Dashboard.js";
import "./assests/saas/main.scss";
import Explore from "./pages/Explore.js";
import ListBook from "./pages/ListBook.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="addBook" element={<AddBook />} />
          <Route path="listBook" element={<ListBook />} />
        </Route>
        <Route path="*" element={<b>Page Not Found.</b>} />
      </Routes>
    </Router>
  );
}

export default App;
