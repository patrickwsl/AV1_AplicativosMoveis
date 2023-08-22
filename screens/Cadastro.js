import React, {useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
import * as Animatable from 'react-native-animatable';

    export default function CadastroTela() {
        const navigation = useNavigation();

        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

    async function cadastro(){
        try{
            const id = uuid.v4();

            const newData = {
                id,
                nome,
                email,
                senha
            }

            await AsyncStorage.setItem("@salvarsenha:senhas", JSON.stringify(newData));
            alert("Cadastrado com sucesso!");
        }catch(error){
            alert("erro, não foi cadastrado");
            console.log(error);
        }
    }  

    return (
        <View style={styles.container}>

                <Text style={styles.titulo}>CADASTRE UM USUÁRIO!</Text>

                    <Animatable.Image
                        animation="flipInY"
                        delay={70}
                        source={require('../assets/icone_cadastro.png')} 
                        style={{ width:'100%' }}  
                        resizeMode="contain" 
                    />
  
            <Text></Text>  

            <Animatable.View delay={600} animation="fadeInUp" style={styles.container}>

                <TextInput placeholder="Digite seu nome" style={styles.textInput} onChangeText={text=>setNome(text)} />
                
                <TextInput placeholder="Digite seu email" style={styles.textInput} onChangeText={text=>setEmail(text)} />
                
                <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />
                
                <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
                    <Text style={{color:'white', textAlign:'center'}}>CADASTRAR!</Text>
                </TouchableOpacity>               
                
                <TouchableOpacity style={styles.btnCadastro} onPress={()=> navigation.navigate('Principal')} >
                    <Text style={{color:'white', textAlign:'center'}}>VÁ PARA A TELA PRINCIPAL!</Text>
                </TouchableOpacity>

            </Animatable.View>
        
        </View>
    );
    }


