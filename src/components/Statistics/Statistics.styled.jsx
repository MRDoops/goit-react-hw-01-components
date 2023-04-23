import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  width: 320px;
  padding: 40px;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
`;

export const StatList = styled.ul`
  display: flex;
`;
const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: solid;
  width: 35px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
