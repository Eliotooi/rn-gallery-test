/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import Item from '../components/Item/Item';
import {ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import {ImagesInDTO} from '../api/images.in';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const defaultPosts: ImagesInDTO[] = [];
  const [post, setPost]: [ImagesInDTO[], (post: ImagesInDTO[]) => void] =
    React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState('');

  React.useEffect(() => {
    axios
      .get<ImagesInDTO[]>(
        'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      )
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(ex => {
        const error =
          ex.response.status === 404
            ? 'Resource Not found'
            : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {post.map(post => (
            <Item
              key={post.id}
              name={post.alt_description}
              auth={post.user.username}
              img={post.urls.full}
            />
          ))}
          {error && <Text>Data not found</Text>}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
