import "./App.css";
import HorizontalView from "./components/HorizontalView/HorizontalView";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Kalpas</h1>
      <SideBar></SideBar>
      <HorizontalView></HorizontalView>
    </div>
  );
}

export default App;
