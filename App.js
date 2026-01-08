import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { styles } from './components/style/style';
import { Sayfa1 } from './components/pages/sayfa1';
import { Sayfa2 } from './components/pages/sayfa2';
import { Sosyal } from './components/pages/sosyal';


export default function App() {
  return (

    <ScrollView contentContainerStyle={[styles.container, { flex: 1 }]}>
      <StatusBar style="auto" />


      <Sayfa2 />
      <Sayfa1 />
      <Sosyal />


    </ScrollView>



  );
}

