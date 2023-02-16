import Search from "./pages/Search";
import Details from "./pages/Details";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details/:owner/:repo" element={<Details />} />
      </Routes>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
