import styled from "styled-components/native";

import { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

type props = {
    active?:boolean;
    icone?:string;
    title?:string;
}
export const Container = styled.TouchableOpacity<props>`
    border:1.5px solid ${({theme})=>theme.colors.text};
    border-radius:5px;
    width:48%;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:15px 0;
    
    ${({active,title})=> active && title === 'Income' && css`
        background-color:${({theme})=>theme.colors.successLigth}   
        border:none;
    `}
    ${({active,title})=> active && title === 'Outcome' && css`
        background-color:${({theme})=>theme.colors.warningLigth}   
        border:none;
    `}
`
export const Icon = styled(Feather)<props>`
    font-size:${RFValue(24)}px;
    padding-right:8px;
    ${({icone})=>icone === 'arrow-up-circle' && css` color:${({theme})=>theme.colors.success}`};
    ${({icone})=>icone === 'arrow-down-circle' && css` color:${({theme})=>theme.colors.warning}`};
`
export const Title = styled.Text`
    color:black;
    font-size:${RFValue(15)}px;
`