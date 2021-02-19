import {
  BrowserRouter as Router,
} from "react-router-dom";


import './Admin.css';
import Navigation from "./Components/MainPage/Navigation/Navigation";
import PageView from "./Components/MainPage/PageView/PageView";


function Admin() {
  return (
    <Router>
      <div className="Admin">
        <Navigation/>
        <PageView/>
      </div>
    </Router>
  );
}

export default Admin;
