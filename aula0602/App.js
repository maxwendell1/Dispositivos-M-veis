import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      altura:0.00,
      peso:0.00,
      resultado:'',
    };
    
    this.imc = this.imc.bind(this);
  }
 
  imc(){

    resultado = this.state.peso / (this.state.altura*this.state.altura);

    if(resultado < 18.5){
      this.setState({ resultado: "Abaixo do peso" })
    }
    else if(resultado >= 18.5 && resultado < 25.0){
      this.setState({ resultado: "Peso normal" })
    }
    else if(resultado >= 25.0 && resultado < 30.0){
      this.setState({ resultado: "Sobrepeso grau I" })
    }
    else if(resultado >= 30.0 && resultado < 35.0){
      this.setState({ resultado: "Sobrepeso grau II" })
    }
    else if(resultado >= 40.0){
      this.setState({ resultado: "Sobrepeso grau III ou mórbida" })
    }
  }
  
  class 
  render(){

    let img = 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk';

    return(
      <View style={styles.centered}>
        
        <Text style={styles.texto}> "Cáluculo do I.M.C." </Text>
        
        <Image source={{ uri: img }} style={{ width: 200, height: 200}}/>

        <TextInput style={styles.input} placeholder="Insira sua Altura" onChangeText={ (al) => this.setState({altura: al}) }/>
        <TextInput style={styles.input} placeholder="Insira seu peso" onChangeText={ (pe) => this.setState({peso: pe}) }/>

        <Button title="Calcular" onPress={this.imc} />
        
        <Text style={styles.texto}>{this.state.resultado}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  centered: {
    flex:1,
    jutifyContent: "center",
    alignItem: "center",
  },



  container: {
    flex: 1
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})
 
export default App;