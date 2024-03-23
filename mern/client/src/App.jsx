import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Stopwatch from "./components/Stopwatch";
const App = () => {
  return (
    <>
      <div>
        <Home />
      </div>
      <div className="w-full p-6">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;