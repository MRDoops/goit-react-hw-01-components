import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FriendItem = styled.li`
  margin: auto;
  display: flex;
  gap: 30px;
  align-items: center;
  width: 370px;
  padding: 15px;
  box-shadow: 0px 0px 19px 3px rgba(0, 0, 0, 0.9);
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  width: 70px;
`;

const statusColor = props => {
  switch (props.eventType) {
    case true:
      return '#22ff00';
    case false:
      return '#ff0000';

    default:
      return '#000';
  }
};

export const Starus = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  background-color: ${statusColor};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 800;
`;
