import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setcount]= useState(0);
  return (
    <View style={styles.container}>
      
      <Text>{count}</Text>

      <View style={styles.ButtonOK}>
        <Button
        title="increase by one"
        onPress={()=> setcount(count + 1)}
        />
      </View>
      

      <View style={styles.ButtonRS}>
        <Button
        title="decrease by one"
        onPress={()=> setcount(Math.max(0,count - 1))}
        />
      </View>


      <View style={styles.ButtonRS}>
        <Button
        title="reset to zero"
        onPress={()=> setcount(count * 0)}
        />
      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonOK: {
    marginHorizontal: 20,
    marginTop: 10
  },
  ButtonRS: {
    marginHorizontal: 20,
    marginTop: 10
  }

});
