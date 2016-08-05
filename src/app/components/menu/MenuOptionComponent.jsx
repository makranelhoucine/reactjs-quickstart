import React from 'react';

class MenuOptionComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
   
  }

  onClick () {    
     alert(this.props.name);    
  }


  render() {
    return (     
        <a  onClick={this.onClick}>{this.props.name}</a> 
    );
  }
}

export default MenuOptionComponent;