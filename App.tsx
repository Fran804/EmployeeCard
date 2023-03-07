import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import Profile from './src/components/Profile';
import Information from './src/components/Information';
import BarsCode from './src/components/BarsCode';
import { Employee, EmployeeContext } from './employeContext';

export default function App() {
  const employee: Employee = {
    id: '00000001',
    email: 'Mark@gmail.com',
    join: '12/30/2022',
    expired: '12/30/2023'
  };

  return (
    <EmployeeContext.Provider value={ employee }>
      <View style={styles.container}>
        <StatusBar style={"light"} />
        <Header />
        <Profile />
        <Information />
        <BarsCode />
      </View>
    </EmployeeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
});
