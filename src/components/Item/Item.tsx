import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

interface ItemProps {
  img: string;
  name: string;
  auth: string;
}

const Item: React.FC<ItemProps> = ({name, auth, img}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Full Image', {img: img});
      }}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} src={img} />
        <View style={styles.infoContainer}>
          <Text>Hame: {name}</Text>
          <Text>Auth: {auth}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
