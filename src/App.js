import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Bio from "./Components/Bio";
import Projects from "./Components/Projects";
import TopBtn from "./Components/TopBtn";
import Contact from "./Components/Socials";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        {/* tetris path here?? */}
      </Routes>
    </Router>
  );
}
export default App;
