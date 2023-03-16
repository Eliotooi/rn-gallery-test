import { Photo, FetchPhotosRawResponse } from './types';

const BASE_URL = 'https://api.unsplash.com';

const CLIENT_ID =
  'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const fetchPhotos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/photos/?client_id=${CLIENT_ID}`);
    const data: FetchPhotosRawResponse = await response.json();

    const formattedData: Photo[] = data.map(item => ({
      id: item.id,
      description: item.alt_description,
      imageURI: item.urls.full,
      author: item.user.name,
    }));

    return formattedData;
  } catch (err) {
    throw new Error('An unexpected error occured during request');
  }
};
