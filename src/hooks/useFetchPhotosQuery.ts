import { useState, useEffect } from 'react';
import { Photo } from '../api/types';
import * as photosApi from '../api/photos';

const useFetchPhotosQuery = () => {
  const [photos, setPhotos] = useState<Photo[] | []>([]);
  const [isError, setIsError] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const fetchPhotos = async () => {
    try {
      setIsLoading(true);

      const fetchedPhotos = await photosApi.fetchPhotos();

      setPhotos(fetchedPhotos);
      setIsLoading(false);
    } catch (err) {
      console.log(err);

      setIsError(true);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return { photos, isError, isLoading };
};

export default useFetchPhotosQuery;
