import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="./img/home-logo.svg" alt="header_logo" />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 24px;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;
