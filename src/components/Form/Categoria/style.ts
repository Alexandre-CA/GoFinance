import { FlatList } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Categories } from '.'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather} from '@expo/vector-icons'
import styled from 'styled-components/native'

type props = {
    selected?:any;
    
}

export const Container = styled.View`
    flex:1;
    font-family:${({ theme }) => theme.font.regular};
    background-color:${({ theme }) => theme.colors.background};

`

export const Header = styled.View`
    align-items:center;
    justify-content:center;
    padding-top:${getStatusBarHeight()}px ;
    height:${113 - getStatusBarHeight()}px;
    background-color:${({ theme }) => theme.colors.primary};

`
export const Title = styled.Text`
    color:${({ theme }) => theme.colors.shape};
    font-size:${RFValue(18)}px;
`
export const CategoryList = styled(FlatList)`

`
export const CategoriaC = styled.TouchableOpacity<props>`
    padding: 10px;
    flex-direction:row;
    align-items:center;
    background-color:${({theme,selected})=>selected ? theme.colors.secondary : theme.colors.shape} ;
`
export const Icon = styled(Feather)`
    font-size:20px;
    padding-right:8px ;
`
export const CategoriaTitle = styled.Text`
    color:black;
    font-size:16px;
`
export const Fild = styled.View`
    flex:1% ;
    justify-content:space-between;
`