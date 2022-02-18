import { useState } from "react";
import "./App.css";
import HorizontalView from "./components/HorizontalView/HorizontalView";
import SideBar from "./components/SideBar/SideBar";
import VerticleView from "./components/VerticalView/VerticleView";

function App() {
  const [display, setDisplay] = useState(true);
  const handleComponentDisplay = () => {
    if (display === true) {
      setDisplay(false);
    }else{
      setDisplay(true);
    }
  };
  return (
    <div className="App" style={{ backgroundColor: "#ebf2f7" }}>
      <div className=" row">
        <div className="col-4">
          <SideBar handleComponentDisplay={handleComponentDisplay} display={display}></SideBar>
        </div>
        {display ? (
          <div className="col-8">
            <HorizontalView></HorizontalView>
          </div>
        ) : (
          <div className="col-8">
            <VerticleView></VerticleView>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
