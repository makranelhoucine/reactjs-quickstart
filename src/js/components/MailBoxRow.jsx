import React from "react";
import { connect } from "react-redux"

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { getMailList } from "../actions/mailActions";
import { deleteMail } from "../actions/mailActions";
import { openMail } from "../actions/mailActions";


@connect((store) => {
  return {
    mailList: store.mail.mailList
  };
})

class MailBoxRow extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {display : true, mail : this.props.mail};
  }

  deleteMail(id) {
    let vo = deleteMail(id);
    this.props.dispatch(vo);
    this.setState( {display : false, mail : this.state.mail});
  }

  openMail(id) {
    let vo = openMail(id)
    this.props.dispatch(vo)
    this.setState( {display : true, mail : this.state.mail});
  }

  render() {  
    let display  = this.state.display; 
    if(!display) {
      return null;
    }
    const unreadMailStyle = {
        fontWeight: "bold",
        cursor: "pointer"
    };
    const readMailStyle = {
        cursor: "pointer"
    };       
    let mail = this.state.mail;    
    let html;        
    if(mail.read) {
      html = (<tr style={readMailStyle}>                                
                  <td>{mail.title}</td>
                  <td>{mail.sentBy}</td>
                  <td>{mail.dateTime}</td>
                  <td onClick={this.deleteMail.bind(this, mail.id)}><Button bsStyle="danger" >Delete</Button></td>
                </tr>)
    } else {
     html = (<tr style={unreadMailStyle}>                                
                  <td onClick={this.openMail.bind(this, mail.id)}>{mail.title}</td>
                  <td onClick={this.openMail.bind(this, mail.id)}>{mail.sentBy}</td>
                  <td onClick={this.openMail.bind(this, mail.id)}>{mail.dateTime}</td>
                  <td><Button bsStyle="danger" onClick={this.deleteMail.bind(this, mail.id)}>Delete</Button></td>
                </tr>)
    }     
    return (html);
  }
}

export default MailBoxRow;