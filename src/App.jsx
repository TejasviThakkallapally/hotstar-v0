import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WatchList from "./pages/WatchList";
import Favourite from "./pages/Favourite";
import Header from "./Components/Header.jsx";
import MovieView from "./pages/MovieView.jsx";
import Login from "./pages/Login.jsx";
import Search from "./pages/Search.jsx";
import AccountPreferences from "./pages/AccountPreferences.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/movieview" element={<MovieView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accountpreferences" element={<AccountPreferences />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        {/* Redirect example with Navigate */}
        {/* <Route path="/redirect" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
