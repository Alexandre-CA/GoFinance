import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const InputForm = styled(TextInput)`
    background-color:${({theme}) => theme.colors.shape};
    font-family:${({theme}) => theme.font.regular};
    padding: 18px 16px;
    font-size:${RFValue(14)}px;
    border-radius:5px;
    margin-bottom:8px;
`

export const Error = styled.Text`
    color:${({theme}) => theme.colors.warning};
    font-family:${({theme}) => theme.font.medium};
`