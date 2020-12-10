import React from 'react';
import { StyleSheet ,Text, View, Button, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { useState } from 'react';
const DATA = [
  {
    id: 'Edgars',
    title: 'Edgars Eglītis',
  },
  {
    id: 'Kristaps',
    title: 'Kristaps Mūrnieks',
  },
  {
    id: 'Helvis',
    title: 'Helvis Tīcs',
  },
  {
    id: 'Tomass',
    title: 'Tomass Jānis Rags'
  },
  {
    id: 'Gustavs',
    title: 'Valts Gustavs Gusmanis',
  },
];
const Item = ({ title, email }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const SecondScreen = () => {
const renderItem = ({ item }) => (
  <Item title={item.title} />
);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000000',
    alignItems: 'center'
  },
  setColor : {
    color: '#fff',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setColors : {
    color: '#fff',
  },
  setFontSizes: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 80,
    marginVertical: 0.5,
    marginHorizontal:0,
    alignItems: 'stretch'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
}
);
export default SecondScreen;
