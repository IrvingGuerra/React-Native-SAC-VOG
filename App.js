import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Button, Alert, TextInput} from 'react-native'
import Home from './Home'

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

        <View style={styles.header}>
          <View style={styles.headerLogo}>
            <Image source={require('./assets/logo.png')} style={styles.logo}/>
          </View>
        </View>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: '#53A8BB'
  },
  headerLogo: {
    flex: 1,
  },
  logo: {
    width : '100%',
    height : '60%',
    resizeMode: 'contain'
  },
  body: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#53A8BB',
    paddingBottom: 50
  },
  card: {
    flex: 0.3,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
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