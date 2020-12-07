import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Timetable from "./Timetable";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/timetable" component={Timetable} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
