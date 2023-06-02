import React from 'react';
import styled from "styled-components";


export const Container = styled.footer`
font-size: 12px;
padding: 25px 0 0 0;
`;


const Footer: React.FC = () => {
  return (
    <Container role={'main'}>
       <a href="instructions.pdf">Download PDF Instructions</a>
    </Container>
  );
}

export default Footer;