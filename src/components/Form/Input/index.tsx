import React from 'react'

import { InputForm, Error } from './style'
import { TextInputProps } from 'react-native'
import { Controller } from 'react-hook-form'

export interface InputProps extends TextInputProps {
    placeholder: string;
    chave: string;
    control: any;
    keyboard: 'default' | 'numeric';
    error: string;

}

export function Input({ placeholder, control, chave, keyboard, error }: InputProps) {
    console.log(error)
    return (
        <>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => {
                    return (
                        <>
                            <InputForm
                                onChangeText={onChange}
                                autoCapitalize="sentences"
                                value={value}
                                placeholder={placeholder}
                                keyboardType={keyboard}
                            >
                            </InputForm>
                            <Error>{error}</Error>
                        </>
                    )
                }}
                name={chave}
            />
        </>
    )
}