import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { styles } from './components/style/style';
import { Sayfa1 } from './components/pages/sayfa1';
import { Sayfa2 } from './components/pages/sayfa2';
import Sosyal from './components/pages/sosyal';
import Sosyal1 from './components/pages/sosyal1';
import { Kisi } from './components/pages/kisi';
import { Sayac } from './components/pages/sayac';

import { useState } from 'react';


export default function App() {
  let [visible, setVisible] = useState(false);

  return (

    <ScrollView contentContainerStyle={[styles.container, { flex: 1 }]}>
      <StatusBar style="auto" />

      <button title="Modal" onPress={() => setVisible((prev) => !prev)} />
      <modal visible={visible}>

        <view>
          <text>Modal</text>
          <button title="Close" onPress={() => setVisible(false)} />
        </view>

      </modal>



      <Sayac />
      <Kisi ad="Kaan Ertugrul " soyad="KOÇ " />
      <Kisi ad="Selahattin " soyad="KOÇ " />
      <Kisi ad="Kaan Ertugrul " soyad="KOÇ " telefonno="0531 60* ** **" />
      <Sosyal1 />
      <Sosyal />
      <Sayfa2 />
      <Sayfa1 />




    </ScrollView>



  );
}

