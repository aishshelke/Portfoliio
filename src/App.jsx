import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
// import Experience from "./components/Experience/Experience";
// import Extra from "./components/Extra/Extra";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Router>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Works" component={Works} />
            <Route path="/Testimonials" component={Testimonials}/>
            {/* <Route path="/Experience" component={Experience} /> */}
            <Route path="/Contact" component={Contact} />
            {/* <Route path="/Extra" component={Extra} /> */}

          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
