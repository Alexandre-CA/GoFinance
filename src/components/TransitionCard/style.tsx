import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

type Prop = {
    transition:boolean
}

export const Container = styled.View`
    width:100%;
    height:128px;
    background-color:${({theme})=>theme.colors.shape};
    padding:17px 24px;
    border-radius:5px;
    margin:8px 0;
`
export const Title = styled.Text`
    font-family:${({theme})=>theme.font.medium}
    font-size:${RFValue(14)}px;
`

export const Amount = styled.Text<Prop>`
    font-family:${({theme})=>theme.font.regular}
    font-size:${RFValue(20)}px;
    color:${({theme,transition})=>transition ? theme.colors.success : theme.colors.warning};
    `

export const Footer = styled.View`
    padding-top:19px;
    flex-direction:row;
    justify-content:space-between;
`

export const Status = styled.View`
    flex-direction:row;
    align-items:center;
`

export const Icon = styled(Feather)` 
    font-size:${RFValue(20)}px;
    padding-right:18px;
    color:${({theme})=>theme.colors.text};
`

export const Description = styled.Text`
     font-size:${RFValue(20)}px;
     color:${({theme})=>theme.colors.text};
`

export const Date = styled.Text`
    font-size:${RFValue(14)}px;
     color:${({theme})=>theme.colors.text};`
