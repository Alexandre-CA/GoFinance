import React from 'react'
import { ListHContainer } from '../../containers/Dashboard/style';
import { Container, Header, Title, Icon, Amount, Description, Body, Footer  } from './style'

export interface ListHPropsDate{
    id?:number
    titulo:string
    valor:string
    icon:'up' | 'down' | 'total'
    date:string
}
interface ListHprops {
    data:ListHPropsDate
}
const IconProp ={
    up:'arrow-up-circle',
    down:'arrow-down-circle',
    total:'dollar-sign',
}


export function ListHorizontal({data }:ListHprops) {
    return (
        <Container type={data.icon}>
            <Header>
                <Title type={data.icon}>{data.titulo}</Title>
                <Icon name={IconProp[data.icon]} type={data.icon} />
            </Header>
            <Body>
                <Amount type={data.icon}>{data.valor}</Amount>
            </Body>
            <Footer>
                <Description type={data.icon}>{data.date}</Description>
            </Footer>
        </Container>
    )
}