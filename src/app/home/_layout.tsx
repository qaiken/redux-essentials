import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useGetNowPlayingMovieQuery } from '@/src/service/query/rtkQuery';
import AppBar from '@/src/components/base/appbar/AppBar';
import styles from './home.style';

const HomeScreen = () => {
  const { data = [], isFetching } = useGetNowPlayingMovieQuery();

  return (
    <AppBar title={'Home'}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Text style={styles.welcomeText}>Now Playing</Text>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          data.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <TouchableOpacity
                style={styles.priceButton}
                onPress={() => {
                  // Handle button press here
                  console.log('Button pressed for:', item.title);
                }}
              >
                <Text style={styles.priceButtonText}>$10</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </AppBar>
  );
};

export default HomeScreen;
