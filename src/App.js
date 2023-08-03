import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import TopBtn from "./Components/TopBtn";
import Contact from "./Components/Socials";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tetris from "../src/Tetris/Tetris.js";

function App() {
  return (
    <Router>
      <Routes forceRefresh={true}>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <TopBtn />
              <Home />
              <Bio />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/tetris" element = {<Tetris/>}>

        </Route>
      </Routes>
    </Router>
  );
}
export default App;
