import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    font-family: ${({theme})=>theme.font.regular};
`
export const Header = styled.View`
    background-color: ${({theme})=>theme.colors.primary};
    height: ${RFPercentage(80)}px;
    align-items: center;
    padding: 0 45px;
    padding-top: ${RFValue(110)}px;
    
`
export const TitleHeader = styled.Text`
    padding-top:${RFValue(45)}px; ;
    font-size:${RFValue(30)}px;
    font-family: ${({theme})=>theme.font.medium};
    text-align:center;
    color:${({theme})=>theme.colors.shape};
    `
export const HeaderDescription = styled.Text`
    padding-top:${RFValue(80)}px; ;
    font-size:${RFValue(16)}px;
    font-family: ${({theme})=>theme.font.regular};
    text-align:center;
    color:${({theme})=>theme.colors.shape};
    `
export const ButtonContainer = styled.View`
    flex: 1%;
    background-color: ${({theme})=>theme.colors.secondary};
    padding: 0 45px;
`