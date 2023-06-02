import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = styled.div<HeaderProps>`
  border-bottom: 1px solid #ddd;
  font-size: 28px;
  padding: 0 0 7px;
`;