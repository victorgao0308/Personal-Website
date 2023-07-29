import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import TopBtn from "./Components/TopBtn";
import Contact from "./Components/Socials";

function App() {
  return (
    <>
      <NavBar/>
      <TopBtn/>
      <Home/>
      <Bio/>
      <Projects/>
      <Contact/>
    </>
  );
}
export default App;
