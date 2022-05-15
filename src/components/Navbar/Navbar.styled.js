import styled from 'styled-components';
import { COLORS } from '../../assets/colors';

export const AppName = styled.h1`
    font-family: 'ArmataRegular';
    margin: 0px;
    color: ${COLORS.bright};
`;

export const Nav = styled.nav`
    display: flex;
    background-color: ${props => props.background ? props.background : COLORS.primary};
    padding: 16px;
`;
