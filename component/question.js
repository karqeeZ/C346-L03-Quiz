import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Question = ({ photo }) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.image} />
            <Text style={styles.question}>Which nation's flag is this?</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "black",
        elevation: 5,
    },
    image: {
        height: 180,
        width: 320,
        marginBottom: 20,
        borderWidth: 0.6,
        borderColor: 'cadetblue',
    },
    question: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: 'cadetblue',
        textAlign: 'center',
    },
});

export default Question;
