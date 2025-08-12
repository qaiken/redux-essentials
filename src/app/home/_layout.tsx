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
import { useAppDispatch } from '@/src/store/store';
import { addItem } from '@/src/features/shoppingCart/shoppingCartSlice';

const HomeScreen = () => {
  const { data = [], isFetching } = useGetNowPlayingMovieQuery();
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1 }}>
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
                    // Step 6: Dispatch Actions / Trigger Events ///////////////
                    dispatch(addItem({ id: item.id }));
                  }}
                >
                  <Text style={styles.priceButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </ScrollView>
      </AppBar>
    </View>
  );
};

export default HomeScreen;
