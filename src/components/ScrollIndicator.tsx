import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ScrollIndicatorProps {
  page: number;
  totalPages: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ page, totalPages }) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
      const isActive = i === page;
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            isActive ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      );
    }
    return dots;
  };

  return (
    <View style={styles.indicator}>
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  dot: {
    borderRadius: 999,
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 6,
    height: 6,
    backgroundColor: '#ccc',
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: '#13231B',
  },
});

export default ScrollIndicator;
