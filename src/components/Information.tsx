import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


function Information() {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <View style={{marginBottom: '20%'}}>
          <Text style={[styles.text, styles.textBold]}>ID</Text>
          <Text style={styles.text}>00000001</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.textBold]}>Correo</Text>
          <Text style={styles.text}>Mark@gmail.com</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <View style={{marginBottom: '30%'}}>
          <Text style={[styles.text, styles.textBold]}>Ingreso</Text>
          <Text style={styles.text}>12/30/2022</Text>
        </View>
        <View>
          <Text style={[styles.text, styles.textBold]}>Caducidad</Text>
          <Text style={styles.text}>12/30/2023</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textContainer: {
    display: 'flex',
    margin: '10%'
  },

  text: {
    textAlign: 'center',
    fontSize: 16
  },

  textBold: {
    fontWeight: 'bold'
  },

  title: {
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold'
  },

  subtitle: {
    marginTop: '2%',
    fontSize: 14
  }
});

export default Information
