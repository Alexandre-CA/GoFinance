import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { ListHPropsDate } from '../../components/ListHorizontal'
import { TrasitionPropsData } from '../../components/TransitionCard'
import { FlatList } from 'react-native'

export const Container = styled.View`  
    flex: 1;
    background-color:${({theme})=>theme.colors.background} ;
`

export const Header = styled.View`
    padding:58px 24px 0;
    height:278px;
    background-color: ${({theme})=>theme.colors.primary};
`

export const UserContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const User = styled.View`
    flex-direction: row;
`

export const UserPerfil = styled.Image`
    width:52px;
    height:48px;
`

export const UserInfo = styled.View`
    padding-left:18px;
`

export const Wellcome = styled.Text`
    color:${({theme}) => theme.colors.shape}
    font-family: Poppins_400Regular;
    font-size:${RFValue(15)}px;
`
export const UserName = styled.Text`
    font-family:  Poppins_700Bold;
    color:${({theme}) => theme.colors.shape}
    font-size:${RFValue(15)}px;
`

export const PowerOff = styled(Feather)`
    align-items: center;
    justify-content: center;
    color:${({theme})=>theme.colors.secondary};
    font-size:${RFValue(28)}px;
`

export const ListHContainer = styled(FlatList)`
    position:absolute;
    top:20%;
`
export const TrasitionList = styled(FlatList)`
`
export const Title = styled.Text`
    font-family:${({theme})=> theme.font.medium};
    font-size:${RFValue(18)}px;
    margin-top:100px;
    margin-left:32px;
    margin-bottom:10px;

`