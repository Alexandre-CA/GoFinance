import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert, Modal } from "react-native";
import { Container, Header, Title, FormContainer, Button, ButtonText, Fild, TransactionTypeContainer, SelectCategory, CategoryName, Icon } from './styles'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp, ParamListBase } from "@react-navigation/native";

import { Input } from "../../components/Form/Input";
import { TrasactionType } from "../../components/Form/TrasationType";
import { Categoria } from "../../components/Form/Categoria";


export function Register() {
    
    const [trasicitonActive, setTrasicitonActive] = useState('');
    const [Category, SetCategory] = useState<any>({
        name: 'Categorias',
        key: 'Category'
    });
    const [ModalVisible, SetModalVisible] = useState(false);
    const { navigate }: NavigationProp<ParamListBase> = useNavigation();

    const scheme = Yup.object().shape({
        name: Yup.string().required('Nome e Obrigatório').typeError('Informe um nome apropriado'),
        amount: Yup.number().required('O valor e Obrigatório').positive('Apenas valores positivos').typeError('Informe um valor numerico')
    })
    const { control, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });


    const onSubmit = (form: any) => {
        if (trasicitonActive) {
            if (Category.key !== 'Category') {

                async function SetTransition() {
                    const dataName = '@gofinances:transitions';
                    let oldData: any = await AsyncStorage.getItem(dataName);
                    oldData = JSON.parse(oldData);
                    const data = [
                        ...oldData,
                        {
                            ...form,
                            transition: trasicitonActive === 'Income',
                            category: Category.key,
                            date:new Date(),
                        },
                    ]
                    //console.log(data);
                    await AsyncStorage.removeItem(dataName);
                    await AsyncStorage.setItem(dataName, JSON.stringify(data));
                    navigate('Listagem');
                    reset();
                    SetCategory({
                        name: 'Categorias',
                        key: 'Category'
                    });
                    setTrasicitonActive('');
                }
                SetTransition();
            } else {
                Alert.alert('Escolha uma categoria.')
            }
        } else {
            Alert.alert('Escolha um tipo de transação.');
        }
    }

    function changeActive(item: string) {
        setTrasicitonActive(item);
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <FormContainer>
                    <Fild>
                        <Input placeholder="Nome" chave="name" control={control} keyboard="default" error={errors.name?.message ?? ''} />
                        <Input placeholder="Preço" chave="amount" control={control} keyboard="numeric" error={errors.amount?.message ?? ''} />
                        <TransactionTypeContainer >
                            <TrasactionType title="Income" active={trasicitonActive} icon="arrow-up-circle" Press={changeActive} />
                            <TrasactionType title="Outcome" active={trasicitonActive} icon="arrow-down-circle" Press={changeActive} />
                        </TransactionTypeContainer>
                        <SelectCategory onPress={() => SetModalVisible(true)}>
                            <CategoryName>{Category.name}</CategoryName>
                            <Icon name="chevron-down" />
                        </SelectCategory>
                        <Modal
                            animationType="slide"
                            visible={ModalVisible}
                        >
                            <Categoria handleCategory={SetCategory} Modal={SetModalVisible} />
                        </Modal>
                    </Fild>


                    <Button
                        activeOpacity={0.75}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <ButtonText>Enviar</ButtonText>
                    </Button>

                </FormContainer>
            </Container>
        </TouchableWithoutFeedback>
    )
}