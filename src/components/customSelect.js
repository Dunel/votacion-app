import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

const CustomSelect = ({ control, name, rules = {}, items, placeholder, onStateChange = () => {} }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
            <Picker
              selectedValue={value}
              onValueChange={(itemValue) => {
                onChange(itemValue);
                onStateChange(itemValue);
              }}
              onBlur={onBlur}
              style={styles.picker}
            >
              <Picker.Item label={placeholder} value="" />
              {items.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
          {error && <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 1,
  },
  picker: {
    height: 45,
    width: '100%',
  },
});

export default CustomSelect;
