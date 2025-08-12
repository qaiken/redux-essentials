import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// Redux by itself is a plain JS library and can work with any UI layer
// react-redux library is the glue used to connect react and redux
import { Provider } from 'react-redux';

import store from '@/src/store/store';
import CentralLoading from '@/src/components/base/loading/CentralLoading';

export default function RootLayout() {
  return (
    // Step 3: Provide the store to the entire application ///////////////////////////////

    // Uses React's Context API internally to make the Redux store
    // accessible to all of the React components in our application

    // Should not import store directly into other files,
    // may cause circular import issues
    <Provider store={store}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <CentralLoading />
    </Provider>
  );
}
