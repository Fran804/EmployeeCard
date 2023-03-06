import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


function Profile() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.image}
          source={require("../imgs/person.png")}
      />
      <Text style={styles.title}>Markus Wilson</Text>
      <Text style={styles.subtitle}>Desarrollador Frontend</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 150, 
    height: 150, 
    marginTop: '5%', 
    borderRadius: 40
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

export default Profile
