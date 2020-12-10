import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';


export default function HomeScreen  ({ navigation, stock }) {
const [counter, setCounter] = useState(0);
  return (
    <React.Fragment>
      <View style={{flex:0, backgroundColor: '#282A2A '}}>
        <Text style={[styles.setColors, styles.setFontSize]} >Current count:  {counter} </Text>
        <Button
          title='PLUS'
          color = 'black'
          onPress={() => { setCounter(counter+1); }}
        />
        <Button
          title='MINUS'
          color = 'black'
          onPress={() => { setCounter(counter-1); }}
        />
      </View>
      <View style={styles.container}>
         <Text style={[styles.setColor, styles.setFontSize]}>Hello World from Group 4!</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>Member: Edgars Eglītis</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>This is my Edgars Eglītis</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}>first React Native application!</Text>
         <Text style = {[styles.setColor, styles.setFontSize]}> I hope it`s good enough! </Text>
         <StatusBar style="auto" />
       </View>
       <View style={{flex:1.2, backgroundColor:'#000000', alignItems: 'center' }}>
       <Image
         style={{
           width: 150,
            height: 150,
             borderRadius:75,
             borderColor : '#fff',
             borderWidth: 0.5,
           }}
         source={require('./a.jpeg')}
       />
       <Text style={[styles.setColor, styles.setFontSize, ]}>Edgars Eglītis, IT student</Text>
       <Button
         title="GROUP 4 LIST"
         color = '#282A2A'
         onPress={() => navigation.navigate('GROUP 4 LIST')}
       />
       </View>
     </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
   justifyContent: 'center',
  },
  setColor : {
    color: '#fff',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setColors : {
    color: '#000000',
  },
});
