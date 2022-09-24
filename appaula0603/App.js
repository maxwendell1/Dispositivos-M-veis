import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado : 0,
    };
    
    this.aleatorio = this.aleatorio.bind(this);

  }
 
  aleatorio(){

    resultado = Math.floor(Math.random() * 10);
    this.setState({resultado})
  }
  
  class 
  render(){

    let img = 'http://cdn.crunchify.com/wp-content/uploads/2013/05/randomnumber-crunchify.png';

    return(
      <View style={styles.centered}>
        
        <Text style={styles.texto}> "Jogo do número aleatório" </Text>
        <br/>
        <Image source={{ uri: img }} style={{ width: 330, height: 100}}/>
        <br/>
        <Text style={styles.texto}> "Pense em um número de 0 a 10" </Text>
        <br/>
        <Button title="Gerar" onPress={this.aleatorio}/>
        <br/>
        <Text style={styles.numero} onChangeText={ (result) => this.setState({resultado:result}) }>

        {this.state.resultado}
        
        </Text>

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

  texto:{
    textAlign: 'center',
    fontSize: 20,
  },

  numero:{
    textAlign: 'center',
    fontSize: 60,
  },
})
 
export default App;
