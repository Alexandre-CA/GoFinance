import React from "react";
import Svg, { SvgProps } from "react-native-svg";
import { Text } from "react-native";
import {Container, Logo, Title} from './style'

interface LoginButtonProps {
    title:string;
    svg: React.FC<SvgProps>;
    onPress?: any
}

export function LoginButton({title,svg:Svg,onPress}:LoginButtonProps){
    return(
        <Container >
            <Logo>
                <Svg/>
            </Logo>
            <Title>{title}</Title>
        </Container>
    )
}