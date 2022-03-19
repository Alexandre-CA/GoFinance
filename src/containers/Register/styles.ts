import styled from "styled-components/native";
import { getStatusBarHeight, ifIphoneX } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
import { RectButton } from "react-native-gesture-handler";

type ButtonProps = {
    onPress?:()=> void;
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

export const FormContainer = styled.View`
    flex:1;
    padding:24px;
    justify-content:space-between;
`
export const Fild = styled.View`
`
export const TransactionTypeContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
`

export const Button = styled.TouchableOpacity`
    align-items:center;
    border-radius:5px;
    width:100%;
    padding: 18px;
    background-color:${({ theme }) => theme.colors.secondary};
`

export const ButtonText = styled.Text`
    color:${({ theme }) => theme.colors.shape};
    font-size:${RFValue(14)}px;
    font-family:${({ theme }) => theme.font.medium};
`
export const SelectCategory = styled.TouchableOpacity`
    margin:16px 0;
    border-radius:5px;
    background-color:${({ theme }) => theme.colors.shape};
    padding: 18px 16px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
export const CategoryName = styled.Text`
    font-size${RFValue(14)}px;
    color:${({ theme }) => theme.colors.text};
`
export const Icon = styled(Feather)`
    font-size${RFValue(20)}px;
    color:${({ theme }) => theme.colors.text};
`