import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import { Foo } from './components/foo/foo';
import { styles } from './components/foo/style';
import { Sayfa1 } from './sayfa1';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Foo />
      <Sayfa1 />


    </View>



  );
}

