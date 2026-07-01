import React, { Component } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="card-footer">
        <h4 className="footer_title">
          Jönköping | 072 975 70 42 | diana.kaloyancheva@gmail.com |
        </h4>
        <div className="footer_icons">
          <a
            href="https://github.com/Diana-NK"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Diana's GitHub"
          >
            <BsGithub className="icons" />
          </a>
          <BsFacebook className="icons" />
          <BsInstagram className="icons" />
          <BsTwitter className="icons" />
          <BsPinterest className="icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
