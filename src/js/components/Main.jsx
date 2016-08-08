import React from "react"
import Navigation from './Navigation.jsx';

class Main extends React.Component {
  render() {
    return (
      <div>
      	<Navigation  />
      	{this.props.children}
      </div>
    );
  }
}


export default Main;