import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

function Banner() {
    return(
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 50,
        height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width : '90%',
        resizeMode: 'contain'
    },
});
export default Banner


