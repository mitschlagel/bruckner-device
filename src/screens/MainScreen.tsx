import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const deviceList = [];

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bruckner Device</Text>
      {deviceList.length === 0 ? (
       <Text>No Devices Found</Text>
       ) : (
        <Text>Device List</Text>
       )        
      }
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
        <Text style={styles.buttonText}>New</Text>
        <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 80,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 36,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0055',
    padding: 16,
    borderRadius: 8,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    marginRight: 12,
    fontSize: 20,
    fontWeight: 'bold',
  },
});