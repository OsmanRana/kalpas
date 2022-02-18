import "./App.css";
import HorizontalView from "./components/HorizontalView/HorizontalView";
import SideBar from "./components/SideBar/SideBar";
import VerticleView from "./components/VerticalView/VerticleView";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ebf2f7" }}>
      <div className=" row">
        <div className="col-4">
          <SideBar></SideBar>
        </div>
        {/* <div className="col-8">
          <HorizontalView></HorizontalView>
        </div> */}
        <div className="col-8">
          <VerticleView></VerticleView>
        </div>
      </div>
    </div>
  );
}

export default App;
