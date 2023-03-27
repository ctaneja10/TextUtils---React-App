import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202123";
      document.body.style.color = "white";
      document.title = "TextUtils - DarkMode";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils - LightMode";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 2000);
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Textform title="Enter the text to analyze" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
