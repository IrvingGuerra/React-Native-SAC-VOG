import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function Home(props) {
    return(
        <View style={styles.body}>
            <Text>Hola {props.userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#53A8BB',
        paddingBottom: 50
    }
});


export default Home


