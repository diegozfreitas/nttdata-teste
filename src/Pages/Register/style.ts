import styled from "styled-components";

export const Container = styled.div``;

export const ContainerCropsPlanted = styled.div`
  margin-bottom: 16px;
`;

export const CropsPlantedChecks = styled.div``;

export const LabelError = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.alert};
  margin-bottom: 8px;
`;
