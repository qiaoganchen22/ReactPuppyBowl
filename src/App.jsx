import "./App.css";
import Players from "./components/Players";
import { useGetPlayersQuery } from "./api/puppyBowlApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.css";

function App() {
  const { isLoading } = useGetPlayersQuery();
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/forms");
        }}
      >
        Create New Player
      </button>
      {!isLoading && <Players></Players>}
    </>
  );
}

export default App;
