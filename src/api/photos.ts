import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchPhotosRawResponse, Photo } from './types';

const CLIENT_ID =
  'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
  }),
  endpoints: builder => ({
    fetchPhotos: builder.query({
      query: () => ({
        url: 'photos',
        params: { client_id: CLIENT_ID },
      }),
      transformResponse: (response: FetchPhotosRawResponse): Photo[] =>
        response.map(photo => ({
          id: photo.id,
          description: photo.alt_description,
          author: photo.user.name,
          thumbnailURI: photo.urls.thumb,
          fullImageURI: photo.urls.full,
        })),
    }),
  }),
});

export const { useFetchPhotosQuery } = photosApi;
