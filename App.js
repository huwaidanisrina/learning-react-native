import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Nama : Huwaida Nisrina Najla</Text>
        <Text>Kelas : XI RPL 4</Text>
        <Text>No Absen : 14</Text>
        <Image 
        style={{height:324, width:368}}
        source={require('./ss1.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
