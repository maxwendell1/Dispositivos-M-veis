import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      precoGasolina:0.00,
      precoAlcool:0.00,
      resultado:'',
    };
    
    this.melhorPreco = this.melhorPreco.bind(this);
  }
 
  melhorPreco(){
    resultado = this.state.precoAlcool / this.state.precoGasolina;

    if(resultado < 0.7){
      this.setState({ resultado: 'Melhor abastecer com álcool' });
    }
    else{
      this.setState({ resultado: 'Melhor abastecer com gasolina' });
    }
  }
  
  class 
  render(){

    let img = 'https://lbc.com.br/wp-content/uploads/2022/03/etanol-ou-gasolina-14-2-1024x512-1.jpg';

    return(
      <View style={styles.centered}>
        <Image source={{ uri: img }} style={{ width: 200, height: 200}}/>

        <TextInput style={styles.input} placeholder="Preço do alcool" onChangeText={ (precoA) => this.setState({precoAlcool: precoA}) }/>
        <TextInput style={styles.input} placeholder="Preço da gasolina" onChangeText={ (precoG) => this.setState({precoGasolina: precoG}) }/>

        <Button title="Calcular" onPress={this.melhorPreco} />
        
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

  container:{
    flex: 1,
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