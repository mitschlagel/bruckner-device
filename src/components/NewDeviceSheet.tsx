import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

type TimePoint = {
  time: number;  // Time in minutes from start
  value: string;  // Changed from number to string for notes
};

type NewDeviceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, duration: number, points: TimePoint[]) => void;
};

const NewDeviceSheet = ({ isOpen, onClose, onSave }: NewDeviceModalProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['50%', '75%'], []);

  useEffect(() => {
    console.log('Effect triggered, isOpen:', isOpen);
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [timePoint, setTimePoint] = useState('');
  const [value, setValue] = useState('');
  const [points, setPoints] = useState<TimePoint[]>([]);

  const convertTimeToMinutes = (timeString: string): number | null => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    if (isNaN(minutes) || isNaN(seconds)) return null;
    return minutes + seconds / 60;
  };

  const addTimePoint = () => {
    const timeInMinutes = convertTimeToMinutes(timePoint);
    if (timeInMinutes === null || !value) return;
    
    setPoints([...points, { time: timeInMinutes, value }]);
    setTimePoint('');
    setValue('');
  };

  const handleSave = () => {
    if (!name || !duration) return;
    const durationInMinutes = convertTimeToMinutes(duration);
    if (durationInMinutes === null) return;
    
    onSave(name, durationInMinutes, points);
    // Reset form
    setName('');
    setDuration('');
    setPoints([]);
    onClose();
  };

  return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onDismiss={onClose}
      >
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>New Device</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Device Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Duration (mm:ss)"
            value={duration}
            onChangeText={setDuration}
          />
          <Text style={styles.subTitle}>Add New Reminder</Text>

          <View style={styles.timePointContainer}>
            <TextInput
              style={styles.timePointInput}
              placeholder="Time (mm:ss)"
              value={timePoint}
              onChangeText={setTimePoint}
            />
            <TextInput
              style={styles.timePointInput}
              placeholder="Notes"
              value={value}
              onChangeText={setValue}
            />
            <TouchableOpacity style={styles.addPointButton} onPress={addTimePoint}>
              <AntDesign name="check" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.pointsList}>
            {points.map((point, index) => (
              <View key={index} style={styles.pointItem}>
                <Text>Time: {Math.floor(point.time)}:{Math.round((point.time % 1) * 60).toString().padStart(2, '0')}</Text>
                <Text>Notes: {point.value}</Text>
              </View>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Device</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  timePointContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  timePointInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  addPointButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  pointsList: {
    maxHeight: 200,
    marginBottom: 10,
  },
  pointItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NewDeviceSheet; 