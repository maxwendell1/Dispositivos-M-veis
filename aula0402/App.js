import React, { Component } from 'react';
import { ScrollView, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    return(
      
      <ScrollView style={{backgroundColor: '#dbfcf8'}}>

        <Text style={{color: 'black', fontSize: 20, textAlign: 'center', marginTop:40}}>
          App Meu Perfil
        </Text>

        <Text style={{color: 'black', fontSize: 28, textAlign:'center', margin: 30}}>
          Max Wendell Garcia Santana
        </Text>
 
        <Image
          source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEHXXrNMO4rAQ/profile-displayphoto-shrink_800_800/0/1607281059146?e=1667433600&v=beta&t=IiMZGE21zk7yKvKSR5Kxd-hzg7V6z8Xih0RdbYYvBhg'}}
          style={{ width: 400, height: 400, marginLeft: 40}}
        />

        <Text style={{color: 'black', fontSize: 20, textAlign: 'center', marginTop:40}}>
          Dados Pessoais:
          {'\n'}{'\n'}
          * 28 anos; {'\n'}
          * R.A.: 1290482013032;
        </Text>

        <Text style={{color: 'black', fontSize: 20, textAlign: 'center', marginTop:40}}>
          Formação: 
          {'\n'}{'\n'}
          * Técnico em Logística pela ETEC Praia Grande; {'\n'}
          * Cursando o 4º semestre do Tecnólogo em Análise e Desenvolvimento de Sistemas na FATEC Praia Grande; {'\n'}
          * Inglês nível Intermediário no CNA - Praia Grande.
        </Text>

        <Text style={{color: 'black', fontSize: 20, textAlign: 'center', marginTop:40}}>
          Experiência: 
          {'\n'}{'\n'}
          * 2012 - 2015 = Operador de caixa na empresa Orion Integração; {'\n'}
          * 2015 - 2021 = Auxiliar de Gestão de Numerário I na Empresa Prosegur; {'\n'}
          * 2021 - Atual = Agente Administrativo na E.M. Mário Possani.
        </Text>

        <Text style={{color: 'black', fontSize: 20, textAlign: 'center', marginTop:40}}>
          Projetos:
          {'\n'}{'\n'}
          * Desenvolvimento de Apps no ambiente acadêmico
        </Text>

      </ScrollView>
    )
  }
}
 
export default App;
