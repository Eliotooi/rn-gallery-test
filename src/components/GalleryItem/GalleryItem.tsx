import React, { FC, memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface Props {
  imageURI: string;
  description: string;
  author: string;
  onPress: () => void;
}

const GalleryItem: FC<Props> = ({ imageURI, description, author, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <View style={styles.infoContainer}>
        <Text>Description: {description}</Text>
        <Text>Auhtor: {author}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default memo(GalleryItem);
