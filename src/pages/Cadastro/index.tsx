import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { useUsuario } from '../../contexts/usuario';

import styles from './styles';

export default function Cadastro() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { user, signIn, signUp, signOut } = useUsuario();

  function handleSignIn() {
    try {
      signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignUp() {
    try {
      signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
    <View style={{ justifyContent: 'space-between', height: 800 }}>
      <View style={styles.container}>
        <Header />
        <Text  style={styles.titleText}>Cadastro de Usuário</Text>
        <SafeAreaView style={styles.formContainer}>
          <Text style={{ fontSize: 20 }}>Email</Text>
          <TextInput 
            style={styles.input} 
            onChangeText={text => setEmail(text)}
          />

          <Text  style={{ fontSize: 20 }}>Senha</Text>
          <TextInput style={styles.input}
            secureTextEntry
            onChangeText={password => setPassword(password)} 
          />
          </SafeAreaView>
          <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
          { user ? (
            <TouchableOpacity style={styles.buttonLogin} onPress={() => signOut()}>
              <Text style={{ color: '#fff', fontSize: 20, textTransform: 'uppercase' }}>Deslogar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
              <Text style={{ color: '#fff', fontSize: 20, textTransform: 'uppercase' }}>Logar</Text>
            </TouchableOpacity>
          ) }
            <TouchableOpacity style={styles.buttonConfirm} onPress={handleSignUp}>
              <Text style={{ color: '#fff', fontSize: 20, textTransform: 'uppercase' }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
      </View>
      <Footer />
    </View>
    </ScrollView>
  );
}