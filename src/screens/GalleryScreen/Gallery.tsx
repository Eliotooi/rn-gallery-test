import React, { FC } from 'react';
import { GalleryItem } from '../../components';
import { ScrollView, View, Text } from 'react-native';
import { RootStackParamsList } from '../../navigation/AppNavigationContainer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PATH } from '../../navigation/constants';
import { useFetchPhotosQuery } from '../../api/photos';

type Props = NativeStackScreenProps<RootStackParamsList, PATH.GALLERY>;

const Gallery: FC<Props> = ({ navigation }) => {
  const { data: photos = [], isLoading, isError } = useFetchPhotosQuery(null);

  const onPhotoPress = (imageURI: string) => {
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
                imageURI={photo.thumbnailURI}
                onPress={() => {
                  onPhotoPress(photo.fullImageURI);
                }}
              />
            ))}
          {isError && <Text>An error occurred</Text>}
        </ScrollView>
      )}
    </View>
  );
};

export default Gallery;
