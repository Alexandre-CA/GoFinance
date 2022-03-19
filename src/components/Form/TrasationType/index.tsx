import React from "react";
import { Container, Icon, Title } from "./style";

export interface TransactionTypeProps {
    title:string;
    icon:string;
    active:string;
    Press:any;
}

export function TrasactionType({ title, icon, active, Press}: TransactionTypeProps) {
    return(
        <Container active={title === active} title={title} onPress={()=> Press(title)} activeOpacity={1}>
            <Icon icone={icon} name={icon}/>
            <Title>{title}</Title>
        </Container>
    )
}