import React from 'react';
import {Text, Alert, StatusBar, Button, ScrollView, StyleSheet} from 'react-native';
import Question from "./component/question.js";
import RNPickerSelect from 'react-native-picker-select';

const App = () => {
    const [answer, setAnswer] = React.useState('');
    const [answer2, setAnswer2] = React.useState('');
    const [answer3, setAnswer3] = React.useState('');
    const [answer4, setAnswer4] = React.useState('');
  return (
      <ScrollView>
          <Text style={styles.text}>Flag Quiz</Text>
          <StatusBar hidden={true}/>
          <Question photo={require('./img/cyprus.webp')}  />
          <RNPickerSelect
              onValueChange={(value) => setAnswer(value)}
              items={[
                  {label:'Cyprus',value:'Cyprus'},
                  {label:'Saudi Arabia', value:'Saudi Arabia'},
                  {label:'England', value:'England'}
              ]}
          />
          <Question photo={require('./img/srilanka.webp')}  />
          <RNPickerSelect
              onValueChange={(value) => setAnswer2(value)}
              items={[
                  {label:'Egypt',value:'Egypt'},
                  {label:'Sri Lanka', value:'Sri Lanka'},
                  {label:'Sudan', value:'Sudan'}
              ]}
          />
          <Question photo={require('./img/wales.png')}  />
          <RNPickerSelect
              onValueChange={(value) => setAnswer3(value)}
              items={[
                  {label:'Albania',value:'Albania'},
                  {label:'Bhutan', value:'Bhutan'},
                  {label:'Wales', value:'Wales'}
              ]}
          />
          <Question photo={require('./img/denmark.png')}  />
          <RNPickerSelect
              onValueChange={(value) => setAnswer4(value)}
              items={[
                  {label:'Iceland',value:'Iceland'},
                  {label:'Norway', value:'Norway'},
                  {label:'Denmark', value:'Denmark'}
              ]}
          />

          <Button onPress={() => {
              const correctAnswer = 'Cyprus'
              const correctAnswer2 = 'Sri Lanka'
              const correctAnswer3 = 'Wales'
              const correctAnswer4 = 'Denmark'
              let message = 'No Answer was entered!'
              let score = 0
              if (answer === correctAnswer) {
                  score += 1;
              }
              if (answer2 === correctAnswer2) {
                  score += 1;
              }
              if (answer3 === correctAnswer3) {
                  score += 1;
              }
              if (answer4 === correctAnswer4) {
                  score += 1;
              }
                message = 'You have ' + score +' correct answer(s)!'
                Alert.alert(message)
          }}
                  title="SUBMIT ANSWERS" color='cadetblue'
          />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
    }
});

export default App;
