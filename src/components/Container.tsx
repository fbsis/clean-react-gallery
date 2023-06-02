import React, { PropsWithChildren } from 'react';
import styled from "styled-components";

import { Header } from './Header';

export const ContainerStyle = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0px 0px 12px rgba(0,0,0,.3);
  -moz-box-shadow: 0px 0px 12px rgba(0,0,0,.3);
  box-shadow: 0px 0px 12px rgba(0,0,0,.3);
  margin: 0 auto;
  padding: 25px;
  min-height: 300px;
  width: 860px;
`;

type ContainerProps = {
  children?: React.ReactNode;
}

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return (
    <ContainerStyle role={'main'}>
      <Header>
        Code Development Project
      </Header>
      {children}
    </ContainerStyle>
  );
}

export default Container;