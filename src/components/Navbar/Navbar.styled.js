import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const AppName = styled.h2`
    font-family: 'ArmataRegular';
    margin: 0px;
    color: ${COLORS.bright};
`

export const Container = styled.nav`
    display: flex;
    background-color: ${props => props.background ? props.background : COLORS.primary};
    padding: 16px;
`

const mod = { AppName, Container }
export default mod;