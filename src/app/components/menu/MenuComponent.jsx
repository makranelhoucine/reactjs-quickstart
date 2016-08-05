import React from 'react';
import MenuOptionComponent from './MenuOptionComponent.jsx';

class MenuComponent extends React.Component {

   constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
   
  }

  onClick () {    
     alert("a");
    
  }


 render() {
    return (
    <div>
      <div onClick={this.onClick}>
        <MenuOptionComponent  name="Intimação" />
     </div>
     <div onClick={this.onClick}>
        <MenuOptionComponent  name="Banco de Pareceres" />
      </div>  
    </div>
    );
  }

}

export default MenuComponent;