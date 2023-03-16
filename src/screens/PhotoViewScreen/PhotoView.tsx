import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { RootStackParamsList } from '../../navigation/AppNavigationContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PATH } from '../../navigation/constants';

type Props = NativeStackScreenProps<RootStackParamsList, PATH.PHOTO_VIEW>;

const PhotoView: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: route.params.imageURI }} />
    </View>
  );
};

export default PhotoView;
