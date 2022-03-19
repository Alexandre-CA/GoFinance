import React, { useContext } from "react";
import { Container, Header, ButtonContainer, TitleHeader, HeaderDescription } from './style'
import LogoSvg from '../../assets/svg/logo.svg'
import GoogleSvg from '../../assets/svg/google.svg'
import { LoginButton } from "../../components/LoginButton";
import { useAuth } from "../../Context";
import { AuthContext } from "../../Context";

export function SingIn(){
    const {user, singInWithGoogle}  = useContext(AuthContext);
    // console.log(user)
    // console.log(handleSIngInGoogle())
    
    async function handleSIngInGoogle(){
        try{
            await singInWithGoogle();
        }catch (err){

        }
    }
    // handleSIngInGoogle()
    return(
    <Container>
        <Header>
            <LogoSvg
            width={120}
            height={68} />
            <TitleHeader>Controle suas finanças de forma muito simples</TitleHeader>
            <HeaderDescription>Faça seu login com uma das contas abaixo</HeaderDescription>
        </Header>
        <ButtonContainer>
            <LoginButton 
            title="Entrar com Google"
            svg={GoogleSvg}
            />

        </ButtonContainer>
    </Container>
    )
}