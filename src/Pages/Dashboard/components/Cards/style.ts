import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding: 24px 48px;
  width: 100%;
  margin: 10px;
  border-radius: 4px;
`;
