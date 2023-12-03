// In App.js in a new project

import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import MainRoutes from './src/Routes/MainRoutes';
import { 
  getFcmToken,
  getFcmTokenFromLocalStorage,
  requestUserPermission,
  notificationListener,
 } from './src/Utils/notification';
 import {localStorage} from './src/Utils/storage';
 import messaging from '@react-native-firebase/messaging';

 const config = {
  screens: {
    Guide:'Guide',
    MainRoutes:{
      screens:{
        Home:'Home',
        Chart:'Chart',
        
        Wallet:'Wallet',
      }
    },
    
  },
};
 const linking = {
  prefixes: ['com.shelf://'],
  config
  
};

function App() {
  // const navigation = useNavigation();
  const fcmToken = localStorage.getString('fcmtoken');
  const [generatedToken, setGeneratedToken] = React.useState<any>();
  
  React.useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp((remoteMessage:any) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // navigation.navigate(remoteMessage.data.type);
        }
       
      });
  }, []);

  
  React.useEffect(() => {
    console.log('storage', fcmToken, 'newly generated', generatedToken);
  }, [fcmToken, generatedToken]);

  React.useEffect(() => {
    const fetchToken = async () => {
      const token = await getFcmToken();
      if (token) {
        setGeneratedToken(token);
      }
    };
    const fetchTokenByLocal = async () => {
      await getFcmTokenFromLocalStorage();
    };
    void fetchToken();
    void fetchTokenByLocal();
    void requestUserPermission();
    void notificationListener();
  }, []);
  
  return (
  <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>} >
  <MainRoutes/>

    
</NavigationContainer>
   
  );
}

export default App;