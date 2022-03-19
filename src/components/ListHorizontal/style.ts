import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

type Props ={
    type:'up' | 'down' | 'total'
}

export const Container = styled.View<Props>`
    width: 300px;
    height: 200px;
    background-color:${({theme}) => theme.colors.shape};
    ${({type}) => type ==='total' && css`
    background-color:${({theme})=>theme.colors.secondary}`}
    padding:18px 23px;
    padding-bottom:42px;
    border-radius:5px;
    margin-right:17px;
`


export const Header = styled.View`
    width: 100%;
    flex-direction:row;
    justify-content:space-between;
    

`

export const Title = styled.Text<Props>`
    font-family:${({theme})=>theme.font.medium}
    font-size:${RFValue(19)}px;
    ${({type}) => type ==='total' && css`
    color:${({theme})=>theme.colors.shape}`}
`

export const Icon = styled(Feather)<Props>`
    font-size:${RFValue(40)}px;
    ${({type}) => type ==='up' && css`
    color:${({theme})=>theme.colors.success}`}
    ${({type}) => type ==='down' && css`
    color:${({theme})=>theme.colors.warning}`}
    ${({type}) => type ==='total' && css`
    color:${({theme})=>theme.colors.shape}`}
    
}
`

export const Body = styled.Text`
    padding-top: 50px;
    flex-direction:column;
`

export const Amount = styled.Text<Props>`
    font-size:${RFValue(32)}px;
    ${({type}) => type ==='total' && css`
    color:${({theme})=>theme.colors.shape}`}
`

export const Footer = styled.View`
    
`
export const Description = styled.Text<Props>`
    color:${({theme})=> theme.colors.text}
    ${({type}) => type ==='total' && css`
    color:${({theme})=>theme.colors.shape}`}
`
