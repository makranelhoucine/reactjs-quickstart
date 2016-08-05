import React from 'react';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};    
   }

  render() {
    return (     
        <h4>{this.props.title}</h4> 
    );
  }
}

export default Article;