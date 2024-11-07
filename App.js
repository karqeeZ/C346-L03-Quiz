import React from 'react';
import { Text, Alert, StatusBar, Button, ScrollView, StyleSheet, View } from 'react-native';
import Question from "./component/question.js";
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Fontisto';

const App = () => {
    const [answer, setAnswer] = React.useState('');
    const [answer2, setAnswer2] = React.useState('');
    const [answer3, setAnswer3] = React.useState('');
    const [answer4, setAnswer4] = React.useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Flags of the World <Icon name={"flag"} size={24} color="white" /></Text>
            <StatusBar hidden={true} />
            <View style={styles.questionContainer}>
                <Question photo={require('./img/cyprus.webp')} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer(value)}
                    placeholder={{ label: "Select a country", value: null }}
                    items={[
                        { label: 'Cyprus', value: 'Cyprus' },
                        { label: 'Saudi Arabia', value: 'Saudi Arabia' },
                        { label: 'England', value: 'England' }
                    ]}
                />
            </View>
            <View style={styles.questionContainer}>
                <Question photo={require('./img/srilanka.webp')} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer2(value)}
                    placeholder={{ label: "Select a country", value: null }}
                    items={[
                        { label: 'Egypt', value: 'Egypt' },
                        { label: 'Sri Lanka', value: 'Sri Lanka' },
                        { label: 'Sudan', value: 'Sudan' }
                    ]}
                />
            </View>
            <View style={styles.questionContainer}>
                <Question photo={require('./img/wales.png')} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer3(value)}
                    placeholder={{ label: "Select a country", value: null }}
                    items={[
                        { label: 'Albania', value: 'Albania' },
                        { label: 'Bhutan', value: 'Bhutan' },
                        { label: 'Wales', value: 'Wales' }
                    ]}
                />
            </View>
            <View style={styles.questionContainer}>
                <Question photo={require('./img/denmark.png')} />
                <RNPickerSelect
                    onValueChange={(value) => setAnswer4(value)}
                    placeholder={{ label: "Select a country", value: null }}
                    items={[
                        { label: 'Iceland', value: 'Iceland' },
                        { label: 'Norway', value: 'Norway' },
                        { label: 'Denmark', value: 'Denmark' }
                    ]}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button onPress={() => {
                    const correctAnswer = 'Cyprus';
                    const correctAnswer2 = 'Sri Lanka';
                    const correctAnswer3 = 'Wales';
                    const correctAnswer4 = 'Denmark';
                    let message = '';
                    let score = 0;
                    if (answer === correctAnswer) score += 1;
                    if (answer2 === correctAnswer2) score += 1;
                    if (answer3 === correctAnswer3) score += 1;
                    if (answer4 === correctAnswer4) score += 1;
                    message = 'You have ' + score + ' correct answer(s)!';
                    Alert.alert(message);
                }}
                        title="SUBMIT ANSWERS" color='cadetblue'
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 24,
        color: 'white',
        backgroundColor: 'cadetblue',
        fontWeight: 'bold',
        padding: 15,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'beige',
    },
    questionContainer: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: "black",
        elevation: 5,
    },
    buttonContainer: {
        margin: 20,
        borderRadius: 10 ,
    },
});

export default App;
