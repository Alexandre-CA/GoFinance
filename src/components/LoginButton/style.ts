import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${({theme})=>theme.colors.shape};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;

    `
export const Logo = styled.View`
    border-right-width: .8px;
    border-color: ${({theme})=>theme.colors.text};
    height: 100%;
    padding: 16px;

`
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.font.regular};
    justify-content: center;
    padding-left:${RFValue(67)}px ;
`
