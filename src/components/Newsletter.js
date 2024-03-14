import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            {/* <h5 style={{ textAlign: "center" }}>You can also reach me on...</h5> */}
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>} 
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} md={6} xl={5}>
              <div className="contact-details">
              <p><EmailIcon /><a href="mailto:kwamelivingstone77@gmail.com" style={{fontSize: 17, color: "#919191"}}>kwamelivingstone77@gmail.com</a></p>
              </div>
          </Col>
          <Col lg={6} md={6} xl={5}>
              <div className="contact-details">
              <p><PhoneInTalkIcon /><a href="tel:+233202651659" style={{fontSize: 16, color: "#919191"}}>+233 2026 51659</a></p>
              </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
