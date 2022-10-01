import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,TouchableOpacity, Image} from 'react-native'


export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {real: 0, dolar: 5, euro: 6 }
    this.calcular = this.calcular.bind(this)

  }
  calcular(){
    
    let real = parseFloat(this.state.real.replace(',','.'))
    let dolar = parseFloat(this.state.dolar)
    let euro = parseFloat(this.state.euro)
    let conver = real / dolar
    let conver2 = real / euro
    conver = conver.toFixed(2)
    conver2 = conver2.toFixed(2)
    
    
    this.setState({conver})
    this.setState({conver2})  
    
    
    console.log(this.state)
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitulo}>Conversor de Moedas</Text>
        <Image 
        source={{uri: 'https://colorindo.org/wp-content/uploads/2022/01/desenho-de-economia.jpg'}}  
        style={{width: 200, height:200, margin: 15,  alignSelf:'center'}}/>
        <Text style={styles.textTitulo2}>BRL para USD/EURO</Text>
        <TextInput style={styles.textInput}
        onChangeText={(real) => {this.setState({real})}}
        keyboardType='numeric'
        placeholder='Digite um valor em Real...'
        />
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.textButton}>Gerar</Text>
        </TouchableOpacity>
        <Text style={styles.textResultado}>Dólar: U${this.state.conver}</Text>
        <Text style={styles.textResultado}>Euro: €{this.state.conver2}</Text>
      </View>
    )
  }
}


//styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  textInput:{
    padding: 30,
    backgroundColor: '#e2e2e2',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    fontSize: 20,
    borderRadius: 10
  },
  button:{
    margin: 40,
    padding: 30,
    borderRadius: 15,
    backgroundColor: 'green'
  },
  textButton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center'
  },
  textResultado:{
    color:'blue',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin:8
  },
  textTitulo:{
    marginTop:70,
    color:'Black',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 15
  },
  textTitulo2:{
    marginTop: 20,
    color:'Black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})