import React from 'react'
import { StyleSheet, View, Image } from 'react-native';

function BarsCode() {
  return (
    <View style={styles.container}>
      <Image
          style={{ width: 250, height: 120 }}
          source={require("../imgs/barsCode.jpg")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default BarsCode
