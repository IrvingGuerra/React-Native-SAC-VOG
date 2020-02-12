import React from 'react'
import {View, StyleSheet} from 'react-native'

function Page() {
    return(
        <View style={styles.containerUp}>
        </View>
    )
}

const styles = StyleSheet.create({
    containerUp: {
        position: 'absolute',
        width: '100%',
        height: '45%',
        top: 50,
        backgroundColor: '#53A8BB',
    }
});
export default Page


