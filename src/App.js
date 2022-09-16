import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPost from "./Pages/NewPost";
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";
import PublishedPost from "./Pages/PublishedPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="new-post"
            element={
              <>
                <SearchBar />
                <Buttons />
                <NewPost />
              </>
            }
          />
          <Route
            exact
            path="published-post"
            element={
              <>
                <SearchBar />
                <Buttons />
                <PublishedPost />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
