import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/hr.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
          <h1 class="text-white">Sonal</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/sonal-c-79465a24a/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/9s-c7" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://leetcode.com/9s_c7/" target="_blank"><img src={navIcon3} alt="" /></a>
                <a href="https://www.hackerrank.com/sonal_chandra3k" target="_blank"><img src={navIcon4} alt="" /></a>
              </div>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
