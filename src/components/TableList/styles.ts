import styled, { css } from 'styled-components';

interface StylesProps {
  height?: number
}

const defaults = css<StylesProps>`
  display: flex;
  width: 100%;
  align-items: center;

  & > div{
    height: ${({ height }) => height}px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
  }

  & > div{
    border: 1px solid #d2d2d3;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div``;

export const ContainerRow = styled.div`
  ${defaults}
`;

export const ContainerRowHeader = styled.div`
  ${defaults}

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Col = styled.div`
  @media (max-width: 768px) {
    width: 100%!important;
    display: block;
  }
`;

export const LabelCol = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: inline;
    margin-right: 10px;
    font-weight: 700;
  }
`;