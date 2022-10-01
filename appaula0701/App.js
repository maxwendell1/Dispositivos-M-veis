import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Button, Image, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome:'',
      idade:'',
      sexo:'Masculino',
      escolaridade:'Ensino fundamental completo',
      limite: 0,
      status: false,
      cadastro:'',
    };
    
    this.cadastro = this.cadastro.bind(this);

  }
 
    cadastro(){

    this.setState({
      cadastro: "Nome: " + this.state.nome + ", " + 
                "Idade: " + this.state.idade + " anos, "  +
                "Sexo: " + this.state.sexo + ", " +
                "Escolaridade: " + this.state.escolaridade + ", " +
                "Limite escolhido: R$ " + this.state.limite + ",00, " +
                "Nascionalidade: " + (this.state.status ? "Brasileiro" : "Estrangeiro")
    });
  }
  
  render(){

    let img = 'https://news.fintechnexus.com/wp-content/uploads/2022/02/2454a129-39a6-48ac-bc5f-4f13b0ae2c6d.jpg';

    return(
      <ScrollView>
        
        <Text style={styles.titulo}> "Abertura de conta" </Text>
        
        <Image source={{ uri: img }} style={{width: 300, height: 300}}/>

        <TextInput style={styles.input} placeholder="Insira seu nome completo" onChangeText=
{ (n) => this.setState({nome:n}) }/>

        <Text>--------------------------------------------------------</Text>

        <TextInput style={styles.input} placeholder="Insira a sua idade" onChangeText=
{ (i) => this.setState({idade:i}) }/>

        <Text>--------------------------------------------------------</Text>

        <Text style={styles.itens}> Insira o sexo: </Text>

        <Picker value={this.state.sexo}
                onValueChange={ (s) => this.setState({sexo: s})}
        >
            <Picker.Item style={styles.pic} key={1} value={"Masculino"} label="Masculino" />
            <Picker.Item style={styles.pic} key={2} value={"Feminino"} label="Feminino" />
        </Picker>

        <Text>--------------------------------------------------------</Text>

        <Text style={styles.itens}> Qual seu nível de escolaridade: </Text>
        

        <Picker value={this.state.escolaridade}
                onValueChange={ (e) => this.setState({escolaridade: e})} 
        >
            <Picker.Item style={styles.pic} key={1} value={"Ensino fundamental completo"} label="Ensino fundamental completo"/>
            <Picker.Item style={styles.pic} key={2} value={"Ensino médio completo"} label="Ensino médio completo" />
            <Picker.Item style={styles.pic} key={3} value={"Ensino técnico completo"} label="Ensino técnico completo"/>
            <Picker.Item style={styles.pic} key={4} value={"Ensino superior completo"} label="Ensino superior completo"/>
            <Picker.Item style={styles.pic} key={5} value={"Pós graduação completa"} label="Pós graduação completa"/>
        </Picker>

        <Text>--------------------------------------------------------</Text>

        <Slider value={this.state.limite}
                minimumValue={0} 
                maximumValue={10000} 
                step={100}
                onValueChange={ (lim) => this.setState({limite: lim})}
                
        />

        <Text style={styles.texto}> {this.state.limite},00 </Text>

        <Text>--------------------------------------------------------</Text>

        <Switch 
           value={this.state.status}
           onValueChange={ (valorSwitch) => this.setState({status: valorSwitch}) }
        />
 
        <Text style={styles.texto}>
          {(this.state.status) ? "Brasileiro" : "Estrangeiro"}
        </Text>

        
        <Button title="Confirmar" onPress={this.cadastro}/>
        
        <Text>{this.state.cadastro}</Text>

      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({

  titulo:{
    textAlign: 'center',
    fontSize: 40,
    marginTop: 30
  },

  itens:{
    textAlign: 'center',
    fontSize: 30
  },

  input:{
    textAlign: 'center',
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    padding: 10
  },

  pic:{
    textAlign: 'center',
    fontSize: 20
  },

  texto:{
    textAlign: 'left',
    fontSize: 20,
    borderWidth: 1
  }
})
 
export default App;
