import "./App.css";
import HorizontalView from "./components/HorizontalView/HorizontalView";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#ebf2f7" }}>
      <div className=" row">
        <div className="col-4">
          <SideBar></SideBar>
        </div>
        <div className="col-8">
          <HorizontalView></HorizontalView>
        </div>
      </div>
    </div>
  );
}

export default App;
