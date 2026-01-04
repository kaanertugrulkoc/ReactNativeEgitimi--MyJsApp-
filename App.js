import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Foo } from './components/foo/foo';
import { styles } from './components/foo/style';
import { Sayfa1 } from './sayfa1';

export default function App() {
  return (

    <ScrollView style={[styles.container, { flex: 1 }]}>
      <StatusBar style="auto" />
      <Foo />
      <Sayfa1 />


    </ScrollView>



  );
}

