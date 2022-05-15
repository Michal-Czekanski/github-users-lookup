import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const WholeContentContainer = styled.div`
    /* Flex */
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
    gap: 32px;
    padding: 32px;

    /* Size */
    height: 100%;
    
    /* Style */
    background-color: ${COLORS.dark};
`;
