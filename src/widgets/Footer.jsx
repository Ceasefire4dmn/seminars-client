import React from "react";
import { Nav } from 'react-bootstrap';
import GitHubIcon from '../shared/icons/GitHubIcon';
import LinkedInIcon from '../shared/icons/LinkedInIcon';

function Footer() {
    return (
        <Nav className="justify-content-center align-items-center py-3">
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="/seminars">Seminars List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="https://hh.ru/resume/174c59d9ff0e2786a70039ed1f7a5465396650">HH.ru</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="https://github.com/Ceasefire4dmn" target="_blank">
                    <GitHubIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{ color: "#ffffff" }} href="http://www.linkedin.com/in/aleksandra-trunova-9538bb325" target="_blank">
                    <LinkedInIcon />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Footer;
