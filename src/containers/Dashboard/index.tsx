import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { ListHorizontal, ListHPropsDate } from '../../components/ListHorizontal'
import { TransitionCard, TrasitionPropsData } from '../../components/TransitionCard'
import { Container, Header, UserContainer, User, PowerOff, UserPerfil, UserInfo, Wellcome, UserName, ListHContainer, Title,TrasitionList } from './style'
import { ActivityIndicator } from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useEffect } from 'react'


export function Dashboard() {
    const [TransionData,setTransionData]= useState<TrasitionPropsData[]>();
    async function loginTransition(){
        const dataName = '@gofinances:transitions';
        const dataTransition: any = await AsyncStorage.getItem(dataName);
        setTransionData(JSON.parse(dataTransition))
    }
    useEffect(()=>{
        loginTransition()
    },[])
    const dataPro:ListHPropsDate[]= [
        {
            titulo:'Entradas',
            valor:'R$ 17.400,00',
            icon:'up',
            date:'Última entrada dia 13 de abril',
        },
        {
            titulo:'Saídas',
            valor:'R$ 1.259,00',
            icon:'down',
            date:'Última saída dia 03 de abril',
        },
        {
            titulo:'Total',
            valor:'R$ 16.141,00',
            icon:'total',
            date:'01 à 16 de abril',
        },
    ]
    return (
        <Container>
            <Header>
                <UserContainer>
                    <User>
                        <UserPerfil source={{uri:'https://avatars.githubusercontent.com/u/80693423?v=4'}}/>
                        <UserInfo>
                            <Wellcome>Olá</Wellcome>
                            <UserName>Alexandre</UserName>
                        </UserInfo>
                    </User>
                    <PowerOff name="power"/>
                </UserContainer>
            </Header>
            <ListHContainer
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => JSON.stringify(item)}
            contentContainerStyle={{paddingHorizontal:24}}
            data={dataPro}
            renderItem={({ item }: any) =>  <ListHorizontal data={item} />}
            />
            <Title>Listagem</Title>
            <TrasitionList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item: any) => JSON.stringify(item)}
            data={TransionData}
            contentContainerStyle={{paddingHorizontal:24}}
            renderItem={({ item }: any) =>  <TransitionCard data={item} />}
            />
        </Container>
    )
}