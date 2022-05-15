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

  background: ${COLORS.primary};

  border: 2px solid ${COLORS.primaryLight};
  border-radius: 16px;
`;

export const TopContentContainer = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  /* size */
  width: 100%;
`;

export const RepositoryNameContainer = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  /* size */
  width: 100%;
`;

export const RepositoryName = styled.p`
  margin: 0;
  color: ${COLORS.bright};
  font-size: 1.3em;
`;

export const RedirectToRepoButton = styled.a`
  
`;

export const RepositoryDetailsContainer = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  /* size */
  width: 100%;
`;
