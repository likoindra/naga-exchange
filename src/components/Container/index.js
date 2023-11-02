import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StatusBar,
  Animated,
  Platform,
  Keyboard,
} from 'react-native';
import React from 'react';
import Styles from './styles';
import {useIsFocused} from '@react-navigation/native';

const Container = ({
  darkStatusBar = false,
  children,
  backgroundColor,
  Top,
  Row = false,
  style,
  ...props
}) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }
  const theme = useColorScheme();

  const StatusBarColor = () => {
    if (
      theme == 'dark' &&
      (Platform.OS == 'android' || Platform.OS == 'ios') &&
      darkStatusBar
    ) {
      return 'dark-content';
    }
    if (
      theme == 'light' &&
      (Platform.OS == 'android' || Platform.OS == 'ios') &&
      darkStatusBar
    ) {
      return 'dark-content';
    }
    if (theme == 'dark' && (Platform.OS == 'android' || Platform.OS == 'ios')) {
      return 'light-content';
    }
    return 'light-content';
  };

  return (
    <>
      <View
        onStartShouldSetResponder={Keyboard.dismiss}
        style={[Styles.container(backgroundColor, Row), style]}
        {...props}>
        <FocusAwareStatusBar
          barStyle={StatusBarColor()}
          backgroundColor="transparent"
          translucent
        />
        {children}
      </View>
    </>
  );
};


export default Container;
