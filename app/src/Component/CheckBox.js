import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MyCheckbox({
  checked,
  onChange,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
  }) {
  function onCheckmarkPress() {
    onChange(!checked);
  }

  const iconProps = checked ? activeIconProps : inactiveIconProps; 
  return (
    <Pressable
      style={[
        buttonStyle,
        checked
          ? activeButtonStyle
          : inactiveButtonStyle,
        ]}
      onPress={onCheckmarkPress}>
      {checked && (
        <Ionicons
          name="checkmark"
          size={20}
          color="white"
          {...iconProps}
          />
      )}
    </Pressable>
  );
}

export default MyCheckbox;
