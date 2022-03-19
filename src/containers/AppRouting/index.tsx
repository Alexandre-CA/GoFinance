import React from "react";
import { Register } from "../Register";
import { Dashboard } from "../Dashboard";
import { Categoria } from "../../components/Form/Categoria";
import { useTheme } from "styled-components";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen} = createBottomTabNavigator();

export function AppRouting() {
    const theme = useTheme();
    return(
        <Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:theme.colors.secondary,
                tabBarInactiveTintColor:theme.colors.text,
                tabBarLabelPosition:'beside-icon',
                tabBarStyle:{
                    alignItems:'flex-start',
                    height: 72
                }
            }}
        >
            <Screen
            name="Listagem"
            component={Dashboard}
            options={{
                tabBarIcon:(({size,color})=>{
                    return(
                        <MaterialIcons 
                        name="format-list-bulleted"
                        size={size}
                        color={color}
                        />
                    )
                })
            }}
            />
            <Screen
            name="Cadastrar"
            component={Register}
            options={{
                tabBarIcon:(({size,color})=>{
                    return(
                        <MaterialIcons 
                        name="attach-money"
                        size={size}
                        color={color}
                        />
                    )
                })
            }}
            />
            <Screen
            name="Resumo"
            component={Categoria}
            options={{
                tabBarIcon:(({size,color})=>{
                    return(
                        <MaterialIcons 
                        name="pie-chart"
                        size={size}
                        color={color}
                        />
                    )
                })
            }}
            />
        </Navigator>
    )
}