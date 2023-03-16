import React, { FC } from 'react';
import { GalleryItem } from '../../components';
import { ScrollView, View, Text } from 'react-native';
import useFetchPhotosQuery from '../../hooks/useFetchPhotosQuery';
import { RootStackParamsList } from '../../navigation/AppNavigationContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PATH } from '../../navigation/constants';

type Props = NativeStackScreenProps<RootStackParamsList, PATH.GALLERY>;

const Gallery: FC<Props> = ({ navigation }) => {
  const { photos, isLoading, isError } = useFetchPhotosQuery();

  const onPhotoPress = (imageURI: string) => {
    console.log(imageURI);
    navigation.navigate(PATH.PHOTO_VIEW, { imageURI });
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {photos &&
            !isError &&
            photos.map(photo => (
              <GalleryItem
                key={photo.id}
                description={photo.description}
                author={photo.author}
                imageURI={photo.imageURI}
                onPress={() => {
                  onPhotoPress(photo.imageURI);
                }}
              />
            ))}
          {isError && <Text>An error occured</Text>}
        </ScrollView>
      )}
    </View>
  );
};

export default Gallery;
