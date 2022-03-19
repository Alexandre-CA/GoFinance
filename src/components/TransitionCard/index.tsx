import React from 'react'
import { Container, Title, Amount, Footer, Status, Icon, Description, Date   } from './style'
import { categories } from '../../Utils/categories'

export interface TrasitionPropsData {
        name:string,
        amount:number,
        category:string,
        date:string
        transition:boolean;
}
interface TrasitionProps {
    data:TrasitionPropsData
}

export function TransitionCard({data}: TrasitionProps) {
    const categoriesKey: any = categories.filter((categore)=>{
        return categore.key === data.category
    })
    const formatedAmout = new Number(data.amount).toLocaleString("pt-BR",{
        style: 'currency',
        currency: 'BRL'
      });
    // console.log(formatedAmout)
    return(
        <Container>
            <Title>{data.name}</Title>
            <Amount transition={data.transition}>{data.transition? '' : '-'}{formatedAmout}</Amount>
            <Footer>
                <Status>
                    <Icon name={categoriesKey[0].icon} />
                    <Description>{categoriesKey[0].name}</Description>
                </Status>
                {/* <Date>{data.status.date}</Date> */}
            </Footer>
        </Container>
    )
}