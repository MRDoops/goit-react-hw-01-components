import styled from '@emotion/styled';

export const ProfileList = styled.div`
  border-radius: 10px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.9);
  width: 400px;
  height: 450px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  width: 150px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 800;
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Location = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
  color: rgb(185, 47, 44);
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 800;
`;
