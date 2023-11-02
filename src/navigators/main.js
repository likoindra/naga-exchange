import {
  View,
  Text,
  Dimensions,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import Styles from './styles';
import DetailGraph from '../screens/DetailGraph';

const MainNav = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '24H', title: '24H'},
    {key: '1D', title: '1D'},
    {key: '1M', title: '1M'},
    {key: '1Y', title: '1Y'},
  ]);

  const renderScene = SceneMap({
    '24H': () => <DetailGraph timeInterval="24H" />,
    '1D': () => <DetailGraph timeInterval="1D" />,
    '1M': () => <DetailGraph timeInterval="1M" />,
    '1Y': () => <DetailGraph timeInterval="1Y" />,
  });

  return (
    <TabView
      // style={{paddingTop: 200}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          labelStyle={Styles.tabLabel}
          style={Styles.tabBar}
          indicatorStyle={Styles.tabIndicator}
        />
      )}
    />
  );
};

export default MainNav;
