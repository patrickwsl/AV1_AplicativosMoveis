import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function exibirCadastro(){
        const user = await AsyncStorage.getItem("@salvarsenha:senhas");
        const data = user ? JSON.parse(user) : {};
        Alert.alert("Numero do ID",data.id);
        Alert.alert("Este é o NOME",data.nome);
        Alert.alert("Este é o E-MAIL",data.email);
        Alert.alert("Esta é a SENHA",data.senha);
    }


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>AQUI SERÁ EXIBIDO O USUÁRIO!</Text>
            <TouchableOpacity style={styles.btnCadastro} onPress={()=>exibirCadastro()}>
                <Text style={{color:'white', textAlign:'center'}}>Clique aqui para exibir o cadastro!</Text>
            </TouchableOpacity>
        </View>
    );

}

