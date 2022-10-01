import React, { Component } from 'react';
import { Text,View, StyleSheet, ScrollView,Image } from 'react-native';

class App extends Component{
  render(){
  let Img1 = 'https://1.bp.blogspot.com/-mvez7kOgzx0/XnV8O9gnpAI/AAAAAAAABkE/i9ApDPH4Ag0VER8nu7S98ln0J7V3PnaIwCLcBGAsYHQ/s1600/Promo%25C3%25A7%25C3%25A3o-Subway-Uber-Eats-Compre-02-Pop-Subs-Por-R%252415%252C90.png';
  let Img5 = 'https://images-americanas.b2w.io/produtos/1830216441/imagens/mclanche-feliz-cheeseburger-com-batata-agua-danoninho-e-brinquedo-sortido/1830216450_1_large.jpg';
  let Img3 = 'https://veja.abril.com.br/wp-content/uploads/2017/11/batata-bk.jpg';
  let Img4 = 'https://embalagemmarca.com.br/wp-content/uploads/2022/09/Ruffles2-1024x584.jpg';
  let Img2 = 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2022/06/handler.jpg?fit=1000%2C1000&ssl=1';

    return(
      <View style={styles.container}>
        <Text style ={{ fontSize: 30, margin: 50, color: 'Black', alignSelf:'center'}}> ANUNCIOS </Text> 
     
        <ScrollView horizontal={true} style={styles.estilo}>
        
        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img1 }} />
           <Text style={styles.mercadoria}> NOVA PROMOCAOO NO SUBWAY! Dois lanches deliciosamente preparados por apenas R$ 15,90, e isso mesmo, voce nao viu errado! APENAS R$ 15,90. Faca seu pedido agora mesmo!</Text>
        </View>

        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img2 }}/>
           <Text style={styles.mercadoria}>PECA AGORA MESMO O NOVO COMBO DO PIZZA HUT, O My Box! Sao diversas combinacoes de sabores possiveis, e o melhor, TUDO POR APENAS R$ 29,90! Venha e faca seu pedido agora mesmo!</Text>
        </View> 

        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img3 }} />
           <Text style={styles.mercadoria}>Ja pensou colar com a galera no Burger King e poder divir esse balde de batata delicioso com geral? Poise, seus pedidos foram atendidos e voce ja pode pedir no Burger King mais proximo por apenas R$ 20,90, CORRE!</Text>
           </View> 

        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img4 }}/>
           <Text style={styles.mercadoria}>Ja pensou poder degustar um Baconzitos com a crocancia 
inigualavel da batata da galera? Ou que tal com o sabor irresistivel Cheetos de parmesao? Esse encontro e real, e voce ja pode conferir no seu mercado mais proximo!</Text>
        </View> 

        <View style={styles.container}>
           <Image style={styles.image} source={{ uri: Img5 }}/>
           <Text style={styles.mercadoria}>Peca agora mesmo o nosso McLanche Feliz! Sao muitas opcoes de brinquedos para o seu filho! Confira agora mesmo no seu McDonalds mais proximo, ou clique no link ao lado e confira nossas promocoes</Text>
           </View>

        </ScrollView>    

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    height:530,
    margin: 1,
    borderWidth: 2,
    alignSelf: 'center',
  },
  image:{   
     width: 295,
    height: 290,
    alignSelf: 'center'
  },
  mercadoria:{
  fontSize: 15,
  margin: 10,
  color: 'black',
  alignSelf: 'center'
  }
 
})

export default App;