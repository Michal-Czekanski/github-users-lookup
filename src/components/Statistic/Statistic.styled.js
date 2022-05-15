import styled from 'styled-components';

export const Container = styled.div`
  /* flex */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;

  /* style */

  box-sizing: border-box;
  border-radius: 16px;

  background: ${props => props.backgroundColor};
  border: 2px solid ${props => props.borderColor};
`;

export const Text = styled.p`
  font-size: 1.3em;
  color: ${props => props.textColor};
  margin: 0;

  /* This is to make sure that objects without icons have proper height */
  min-height: 32px; 
`;
