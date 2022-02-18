import { useState } from "react";
import "./App.css";
import HorizontalView from "./components/HorizontalView/HorizontalView";
import SideBar from "./components/SideBar/SideBar";
import SideBarWithFeedBack from "./components/SideBarWithFeedBack/SideBarWithFeedBack";
import VerticleView from "./components/VerticalView/VerticleView";

function App() {
  const [display, setDisplay] = useState(true);
  const [displayAll, setDisplayAll] = useState(true);
  const handleComponentDisplay = () => {
    if (display === true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  const handleAllDisplay = () => {
    if (displayAll === true) {
      setDisplayAll(false);
    } else {
      setDisplayAll(true);
    }
  };
  return (
    <div className="App" style={{ backgroundColor: "#ebf2f7" }}>
      {displayAll ? (
        <div className="row">
          <div className="col-4">
            <SideBar
              handleComponentDisplay={handleComponentDisplay}
              handleAllDisplay={handleAllDisplay}
              display={display}
            ></SideBar>
          </div>
          <div className="col-8">
            {display ? (
              <div>
                <HorizontalView></HorizontalView>
              </div>
            ) : (
              <div>
                <VerticleView></VerticleView>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="col-12">
          <SideBarWithFeedBack
            handleAllDisplay={handleAllDisplay}
            displayAll={displayAll}
          />
        </div>
      )}
    </div>
  );
}

export default App;
