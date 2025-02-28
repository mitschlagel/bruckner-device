import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import NewDeviceSheet from './src/components/NewDeviceSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// Define the TimePoint type
type TimePoint = {
  time: number;  // Time in minutes from start
  value: string;  // Changed from number to string for notes
};

// Define the Item type
type Item = {
  id: string;
  name: string;
  duration: number;  // Duration in minutes
  points: TimePoint[];
};

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addNewItem = (name: string, duration: number, points: TimePoint[]) => {
    const newItem: Item = {
      id: Date.now().toString(),
      name,
      duration,
      points,
    };
    setItems([...items, newItem]);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>Duration: {item.duration} minutes</Text>
      <Text>Points: {item.points.length}</Text>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerText}>Bruckner Device</Text>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => {
              console.log('Button pressed');
              setIsOpen(true);
            }}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.addButtonText}>New Device</Text>
              <AntDesign name="plus" size={20} color="white" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <NewDeviceSheet
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSave={addNewItem}
          />
          <StatusBar style="auto" />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
});
