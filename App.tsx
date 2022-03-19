import React from 'react'
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


import theme from './src/Global/theme';
import { Dashboard } from './src/containers/Dashboard'
import { Register } from './src/containers/Register';
import { SingIn } from './src/containers/SingIn';
import { AppRouting } from './src/containers/AppRouting';
import {AuthProvider} from './src/Context'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }else{
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style='light'/>
          <AuthProvider>
            <SingIn />
          </AuthProvider>
      </ThemeProvider>
    );  
  }

}


