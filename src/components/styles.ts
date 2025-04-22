import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 1rem;
  font-family: sans-serif;
`;

export const Icon = styled.div`
  margin-left: 0; /* Move to left */
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 3%; /* Move to right */
`;

export const LinkItem = styled.a`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;
