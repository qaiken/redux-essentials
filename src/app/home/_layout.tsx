import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { useLazyGetNowPlayingMovieQuery } from '@/src/service/query/rtkQuery';
import { useEffect } from 'react';
import AppBar from '@/src/components/base/appbar/AppBar';
import { useLocalization } from '@/src/hooks/useLocalization';

const HomeScreen = () => {
  const localization = useLocalization();
  const [fetchNowPlayingMovie, { data, isFetching }] =
    useLazyGetNowPlayingMovieQuery();

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  console.log(data, 'hi');

  if (isFetching) {
    return <ActivityIndicator />;
  }

  return (
    <AppBar title={'Home'}>
      <ScrollView>
        <Text>Welcome to {localization.REACT_NATIVE()} </Text>
        <Text>{JSON.stringify(data, null, ' ')}</Text>
      </ScrollView>
    </AppBar>
  );
};

export default HomeScreen;
