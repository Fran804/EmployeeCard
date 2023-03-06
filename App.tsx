import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import Profile from './src/components/Profile';
import Information from './src/components/Information';
import BarsCode from './src/components/BarsCode';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <Header />
      <Profile />
      <Information />
      <BarsCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
