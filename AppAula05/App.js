import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
 
class App extends Component{

  constructor(props){
    super(props);
    this.state = ({
      contador: 0,
    });
  }
  
  clicouMais(){
    this.setState({

      contador: this.state.contador + 1,
    });
  }

  clicouMenos(){
    this.setState({
      contador: this.state.contador - 1,
    });
  }

 
  render(){
    return(
      <View style={styles.container}>
 
      <Button color='green' title='Adicionar' onPress={() => this.clicouMais()}/>
      {<br/>}
      <Button color='red' title='Excluir' onPress={() => this.clicouMenos()}/>
      <Text>{this.state.contador}</Text>

      </View>
    );
  }
}


 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
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
  },
  botao:{
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
  }
})
 
export default App;


