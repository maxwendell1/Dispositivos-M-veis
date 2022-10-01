import React, { Component } from 'react';
import { Text,View, StyleSheet, ScrollView,Image } from 'react-native';


 
class App extends Component{
  render(){
  let Img1 = 'https://alterrasoft.com/wp-content/uploads/2019/05/backend-for-article-2.jpg';
  let Img3 = 'https://i0.wp.com/www.datageeks.com.br/wp-content/uploads/2019/05/Engenheiro-de-Dados.jpg?resize=725%2C405&ssl=1';
  let Img2 = 'https://dkrn4sk0rn31v.cloudfront.net/2018/01/17135411/html.png';

    return(
      <View style = {{marginBottom: 10}}> 
        <Text style ={{ fontSize:30, margin:70, color:'blue',fontFamily:"cursive", alignSelf:'center'}}> 
        VAGAS DE TI 
        </Text> 
      
        <ScrollView vertical={true}>

    <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img1 }}/> 
           <Text style={styles.vagas}> 
           Salario: R$ 2.500,00
           Descricao: Ter conhecimento em Java, C++ e experiencia de 2 anos na area de desenvolvimento. Ser autodidata e proativo. Ser Capaz de trabalhar em 
          conjunto com equipe.
          </Text>
      </View>   

      <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img2 }}/> 
           <Text style={styles.vagas}>
           Salario: R$ 2.750,00 
           Descricao: Conhecimento abrangente em HTMl, CSS, JAVAScript e PHP. Ter grandes habilidades em SoftSkill e com disponibilidade para trabalhar
          em HomeOffice; Voce faz seu horarios.
          </Text>
      </View> 

          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: Img3 }}/>
            <Text style={styles.vagas}>
            Salario: R$ 3.200,00
            Descricao: Sera responsavel pelos armazenamento e distribuir os dados. Em linhas gerais, e responsavel por gerenciar, otimizar, supervisionar e
           monitorar a recuperacao, armazenamento.
           </Text>
      </View> 

        </ScrollView>
     </View> 

    )
  }
}

 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 290,
    height:550,
    margin: 4,
    borderWidth: 5,
    marginBottom: 5
  },

  image:{
    
     width: 280,
    height: 250
  },

  vagas:{
  fontFamily: "cursive",
  fontSize: 15,
  margin: 10,
  fontWeight: 'bold',
  }
 
})

export default App;