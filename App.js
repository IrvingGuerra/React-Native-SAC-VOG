import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, TextInput} from 'react-native'
import Home from './Home'
import Banner from './src/main/containers/banner'
import Page from './src/main/containers/page'

class HolaMundo extends Component{

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      login: false
    }
  }

  login = () => {
    if (this.state.userName == '' || this.state.password == ''){
      Alert.alert("No dejes campos vacios");
    }else{
      if(this.state.userName == 'Irving' && this.state.password == '123'){
        this.setState({login: true});
      }else{
        Alert.alert("Datos incorrectos");
      }
    }

  }

  render(){
    return(
        <View style={styles.container}>
          <Page/>
          <Banner/>
          {
            this.state.login == false
                ?
                <View style={styles.body}>
                  <View style={styles.card}>
                    <TextInput placeholder = "Número de Boleta" onChangeText = { (userName) => this.setState({userName}) } style={styles.inputs}/>
                    <TextInput placeholder = "Contraseña" onChangeText = { (password) => this.setState({password}) } style={styles.inputs}/>
                    <Button title={"Login"} onPress={this.login}/>
                  </View>
                </View>
                :
                <Home userName={this.state.userName}/>
          }
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    flex: 0.3,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20

  },
  inputs: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  }


});

export default  HolaMundo;