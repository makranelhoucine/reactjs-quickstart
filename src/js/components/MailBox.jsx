import React from "react";
import { connect } from "react-redux"

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'react-bootstrap';

import { getMailList } from "../actions/mailActions";

@connect((store) => {
  return {
    mailList: store.mail.mailList
  };
})

class MailBox extends React.Component {

  componentWillMount() {
    this.props.dispatch(getMailList())
  }

  render() {
  const { mailList } = this.props;
  const mappedMail = mailList.map(mail => <tr>
                                <td>{mail.title}</td>
                                <td>{mail.sentBy}</td>
                                <td>{mail.dateTime}</td>
                                </tr>)

    return (
      <div>
        <Table responsive striped condensed hove>
          <thead>
            <tr>
              <th>Mail Title</th>
              <th>Sent by</th>
              <th>Date</th>
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