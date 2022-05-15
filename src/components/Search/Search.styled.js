import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const Container = styled.div`
  /* box */
  box-sizing: border-box;
  
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  /* size */
  width: 100%;

  /* Style */
  background: ${COLORS.primary};

  border: 2px solid ${COLORS.primaryLight};
  border-radius: 16px;
`;

export const SearchForm = styled.form`
  /* size */
  width: 100%;
`;

export const Input = styled.input`
  /* size */
  width: 100%;
  
  /* font */
  font-size: 1.3em;
  color: ${COLORS.bright};

  /* style */
  background: none;
  border: none;
`;
