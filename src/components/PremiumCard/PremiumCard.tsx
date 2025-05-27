import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import EsText from 'components/EsText/EsText';
import { width,height } from '../../constants/index';


type Props = {
  onPress?: () => void;
};

const PremiumCard: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* Left icon with badge */}
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/images/letter.png')} 
          style={styles.mailIcon}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <EsText size={16} weight={600} color='rgba(229, 201, 144, 1)'style={{lineHeight:21}} >FREE Premium Available</EsText>
        <EsText size={13} weight={400} color='rgba(229, 201, 144, 1)'style={{lineHeight:21}} >Tap to upgrade your account!</EsText>
      </View>

      {/* Arrow icon */}
      <Feather name="chevron-right" size={20} color="#F4C86A" />
    </Pressable>
  );
};

export default PremiumCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1A14',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    position: 'relative',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailIcon: {
    width: width * 5,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
  },
 
});
