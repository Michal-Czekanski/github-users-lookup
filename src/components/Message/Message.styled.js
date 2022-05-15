import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const MessageText = styled.h2`
    margin: 0px;
    color: ${props => props.color ? props.color : COLORS.dark};
    text-align: center;
`;
