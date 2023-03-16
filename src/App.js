import logo from "./logo.svg";
import "./App.css";
import CompShowBlog from "./blog/ShowBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompCreateBlog from "./blog/CreateBlog.js";
import CompEditBlog from "./blog/EditBlog.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlog />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
