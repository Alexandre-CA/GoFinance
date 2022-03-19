import React, { useState } from "react";
import { Container, Header, Title, CategoryList, CategoriaC, Icon, CategoriaTitle, Fild } from "./style";

import { Button, ButtonText } from '../../../containers/Register/styles'
import { Alert, Modal } from "react-native";

import { categories } from "../../../Utils/categories";

export interface Categories {
    key: string;
    name: string;
    icon: string;
    color: string;
}
export interface Props {
    handleCategory: (item: any) => void;
    Modal: (item: boolean) => void;
}



export function Categoria({ handleCategory, Modal }: Props) {
    const [GetCategory, SetCategory] = useState<any>({})

    function changeCategory(item: Categories) {
        SetCategory(item);
    }
    function handleSubmit() {
        if (GetCategory.key) {
            handleCategory(GetCategory);
            Modal(false);
            SetCategory({})
        }
        else {
            Alert.alert('Escolha uma categoria')
        }
    }
    return (
        <Container>
            <Header>
                <Title>Categorias</Title>
            </Header>
            <Fild>
                <CategoryList
                    data={categories}
                    keyExtractor={(item: any) => item.key}
                    renderItem={({ item }: any) => {

                        return (
                            <CategoriaC selected={GetCategory.key === item.key} onPress={() => changeCategory(item)}>
                                <Icon name={item.icon} />
                                <CategoriaTitle>{item.name}</CategoriaTitle>
                            </CategoriaC>
                        )
                    }}
                />
                <Button onPress={() => handleSubmit()}>
                    <ButtonText>Confirmar</ButtonText>
                </Button>
            </Fild>
        </Container>
    )
}