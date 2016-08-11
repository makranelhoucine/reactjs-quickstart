import React from "react";
import { connect } from "react-redux"

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { getMailList } from "../actions/mailActions";
import { deleteMail } from "../actions/mailActions";


@connect((store) => {
  return {
    mailList: store.mail.mailList
  };
})

class MailBox extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {mailList : []};
  }

  componentWillMount() {
    let vo = getMailList();
    this.props.dispatch(vo)
    console.log(vo.payload.mailList)
    this.setState({mailList: vo.payload.mailList});
  }

  deleteMail(id) {
    let vo = deleteMail(id);
    this.props.dispatch(vo)
    this.setState({mailList: vo.payload.mailList});
  }


  render() {
  let  mailList   = this.state.mailList;
  let mappedMail = mailList.map(mail => <tr key={mail.id}>                                
                                <td>{mail.title}</td>
                                <td>{mail.sentBy}</td>
                                <td>{mail.dateTime}</td>
                                <td><Button bsStyle="danger" onClick={this.deleteMail.bind(this, mail.id)}>Delete</Button></td>
                                </tr>)

    return (
      <div>
        <Table responsive striped condensed hove>
          <thead>
            <tr>
              <th>Mail Title</th>
              <th>Sent by</th>
              <th>Date</th>
              <th>#</th>              
            </tr>
          </thead>
          <tbody>
            {mappedMail}
          </tbody>
        </Table>
       </div>
    );
  }
}


export default MailBox;