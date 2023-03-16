import React from 'react';
import {Image, View} from 'react-native';
import styles from './style';
import {useRoute} from '@react-navigation/native';

interface FullImageProps {
  img: string;
}

const FullImage: React.FC<FullImageProps> = () => {
  const route = useRoute();
  const {img} = route.params;

  return (
    <View>
      <Image style={styles.image} src={img} />
    </View>
  );
};

export default FullImage;
