import React from 'react'
import { StyleSheet, View, Image } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Image
          style={{ width: 150, height: 100, marginTop: '8%' }}
          source={require("../imgs/logo.png")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Header
