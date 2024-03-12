import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGO.png";
import navicon0 from "../assets/img/navicon0.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/navicon4.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://linkedin.com/in/livingstone-david-kwame-hini-bba016176" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/DavidLivingstoneHini" target="_blank" rel="noreferrer"><img src={navicon0} alt="" style={{width: 30}}/></a>
                <a href="http://twitter.com/@StoneSwae" target="_blank" rel="noreferrer"><img src={navIcon4} alt="" style={{width: 30}}/></a>
                <a href="https://www.instagram.com/swae_stone/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
