import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './BottomDrawer.style';

interface BottomDrawerProps {
  content?: string;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ content }) => {
  if (!content) return null;

  return (
    <View style={styles.container}>
      <View style={styles.drawer}>
        <View style={styles.header}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomDrawer;
