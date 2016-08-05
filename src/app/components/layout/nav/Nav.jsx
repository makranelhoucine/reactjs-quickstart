import React from "react";
import { IndexLink, Link } from "react-router";

class Nav extends React.Component {
  constructor() {
    super()    
  }  

  render() {   
    console.log("Loading Nav Bar.");
    
    return (
      <div>
          <ul>            
            <li>
              <Link to="archives">Archives</Link>
            </li>
            <li >
              <Link to="settings">Settings</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default Nav;