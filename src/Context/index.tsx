import { createContext, ReactNode, useContext } from "react";
import * as AuthSession from 'expo-auth-session';


interface AuthProps {
    children: ReactNode
}
export const AuthContext = createContext({}) as any;
function AuthProvider({ children }: AuthProps) {
    const user = ['ale'];
    return (
        <AuthContext.Provider value={{user, singInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}

async function singInWithGoogle() {
    try {
        const Client_ID = '908044033981-ejbunksij2up99kig5kldijkv4b1k3bu.apps.googleusercontent.com';
        const Redirect_URL = 'https://auth.expo.io/@alexandre-ca/goFinance';
        const Response_Type = 'JSON';
        const Scope = encodeURI('profile email') ;
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Client_ID}&redirect_uri=${Redirect_URL}&response_type=${Response_Type}&scope=${Scope}}`;
        const response = await AuthSession.startAsync({authUrl})
        console.log(response)
    }
    catch (err) {

    }
}
function useAuth() {
    const context = useContext(AuthContext);
    return {context}
}

export { AuthProvider, useAuth }