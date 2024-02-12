import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WeekView from "./components/WeekView";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week-view/:id" element={<WeekView />} />
      </Routes>
    </>
  );
};

export default App;
