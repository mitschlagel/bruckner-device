import React, { useState, useCallback, useRef, useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

type Device = {
  id: string;
  name: string;
  type: string;
}
import styles from '../../styles/MainScreenStyles';

const initialDeviceList: Device[] = [];

const MainScreen = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    initialDeviceList.push({
      id: '1',
      name: 'iPhone 12 Pro',
      type: 'Smartphone',
    });
  }, []);

  // renders
  return (
      <GestureHandlerRootView style={styles.container}>
        <BottomSheetModalProvider>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePresentModalPress}
          >
            <Text style={styles.buttonText}>New Device</Text>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
          </View>
          
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text style={{paddingBottom: 200}}>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheetModal>
        </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const DeviceList: React.FC<{ deviceList: Device[] }> = ({ deviceList }) => {
  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={deviceList}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.name}</Text>
          <Text>{item.type}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default MainScreen;