import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const Container = styled.div`

  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  gap: 16px;

  /* size */
  width: 100%;

  /* style */
  box-sizing: border-box;

  background: ${COLORS.bright};

  border: 2px solid ${COLORS.primary};
  border-radius: 16px;
`;

export const ContainerTop = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  /* size */
  width: 100%;
`;

export const Avatar = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 15px;
`;

export const Username = styled.p`
  color: ${COLORS.dark};
  font-size: 1.5em;
`;

export const DetailsContainer = styled.div`
  /* flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;

  /* size */
  width: 100%;
`;

export const StatisticsRow = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  /* size */
  width: 100%;
`;
