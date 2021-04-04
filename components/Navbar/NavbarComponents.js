import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 36rem;
  position: fixed;
  z-index: 999;
`;

export const Body = styled.div`
  background-color: ${({ isMoving }) => (isMoving ? "#eee" : "#2223")};
  color: white;
`;

export const Title = styled.h1``;
