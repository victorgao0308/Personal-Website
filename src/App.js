import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import TopBtn from "./Components/TopBtn";

function App() {
  return (
    <>
      <NavBar/>
      <TopBtn/>
      <Home/>
      <Bio/>
      <Projects/>
    </>
  );
}
export default App;
