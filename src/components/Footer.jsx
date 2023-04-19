import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 0.6rem;
  color: #666;
  margin: 0;
  text-align: center;

  a {
    color: #666;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #333;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Copyright © 2023 Lily & Shpoo Adventures. Designed and developed by{' '}
        <a href="https://www.psh-sltwzcky.dev">Pash Slatwyezcky</a>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
