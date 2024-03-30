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
        <div className="justify-content-center" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}><EmailIcon style={{ color: "#CC02C2" }} /><span style={{marginLeft: 7}}></span><a href="mailto:kwamelivingstone77@gmail.com" style={{ fontSize: 16, color: "#CC02C2" }}>kwamelivingstone77@gmail.com</a></p>
        </div>
      </div>
    </Col>
  )
}
