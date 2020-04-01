import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Voice from '@react-native-community/voice';

export default class App extends Component<Props> {

  constructor(){
    super();
    this.state = {
        results: []
    }
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechResults(e){
    this.setState({
        results:e.value
    })
  }
  onSpeechStart(){
    Voice.start('en_US');
  }
  onSpeechEnd(){
    Voice.stop();
  }

  render() {
    return (
      <View style={styles.Content}>
        <Text style={styles.title}>Speech to Text</Text>
        <View style={styles.btn}>
            <TouchableOpacity style={styles.btnStyle}>
                <Text>Read</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSpeechStart.bind()} style={styles.btnStyle}>
                <Text>Start Recording</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onSpeechEnd.bind()} style={styles.btnStyle}>
                <Text>Stop Recording</Text>
            </TouchableOpacity>
            {this.state.results.map( (text,index) => {
                return(
                    <Text key={index}>{text}</Text>
                )
            })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  Content: {
    flex:1,
    alignItems:'center',
    marginTop:30
  },
  btn:{
  justifyContent:'center',
  flex:1
  },
  btnStyle:{
    padding:10,
    backgroundColor:'#cecece',
    marginBottom:10
  }
});