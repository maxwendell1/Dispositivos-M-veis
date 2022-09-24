import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num1:0.00,
      num2:0.00,
      resultado:'',
    };
    
    this.Multi = this.Multi.bind(this);
  }
 
  Multi(){

    resultado = this.state.num1 * this.state.num2;
    this.setState({resultado})

  }
  
  class 
  render(){

    let img = 'https://psicosol.com/wp-content/uploads/2017/10/arquivo-multiplicacao-em-fichas.jpg';

    return(
      <View style={styles.centered}>
        
        <Text style={styles.texto}> "Multiplicação de dois números" </Text>
        
        <Image source={{ uri: img }} style={{ width: 200, height: 200}}/>

        <TextInput style={styles.input} placeholder="Insira o 1º número" onChangeText={ (n1) => this.setState({num1: n1}) }/>
        <TextInput style={styles.input} placeholder="Insira o 2º número" onChangeText={ (n2) => this.setState({num2: n2}) }/>

        <Button title="Calcular" onPress={this.Multi} />
        
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
