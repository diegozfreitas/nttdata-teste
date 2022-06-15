import styled from 'styled-components';

export const ContentGraphics = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const Graphic = styled.div`
  width: 32%;
  height: 350px;
  padding-top: 16px;
`;

export const GraphicTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  text-align: center;
  height: 50px;
  margin: 0;
`;
