import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const Question = ({photo}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={{height:200,width:400,borderWidth:0.1,borderColor:'black'}}/>
            <Text>What country does this flag belong to?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Question
