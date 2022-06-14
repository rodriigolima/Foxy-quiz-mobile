import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import {View} from 'react-native';

export function Splash() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black'}}>
      <LottieView
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => navigation.navigate('Home')}
      />
    </View>
  );
}
