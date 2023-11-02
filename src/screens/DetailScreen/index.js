import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';
import Styles from './styles';
import MainNav from '../../navigators/main';
import {useNavigation} from '@react-navigation/native';
import ICON_LEFT from '../../assets/Images/left.png';

const formatIDR = value => {
  const formattedValue = value
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedValue}`;
};

const DetailHeader = ({data, navigation}) => {
  return (
    <View style={Styles.containerBar}>
      <View style={Styles.rowBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingBottom: 3}}>
          <Image
            source={ICON_LEFT}
            resizeMode="contain"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <View style={Styles.rowHeader}>
          <Text style={Styles.textName}>{data?.name}</Text>
          <Text style={Styles.textSymbol}>{data?.symbol}</Text>
        </View>

        <Image source={{uri: data?.icon}} style={Styles.images} />
      </View>

      <View style={Styles.detailHeader}>
        <Text style={Styles.textHeader}>{`${data?.pair} ${formatIDR(
          data?.min_pair_transaction,
        )}`}</Text>
        <View style={Styles.textColumn}>
          <Text style={Styles.textMid}>{`${data?.vol} ${data?.symbol}`}</Text>
          <Text style={Styles.textFooter}>
            {`${
              data?.change.includes('-') ? data?.change : '+' + data?.change
            }`}
            %
          </Text>
        </View>
      </View>
    </View>
  );
};

const DetailScreen = props => {
  const data = props?.route?.params?.props;
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View>
        <DetailHeader navigation={navigation} data={data} />
      </View>

      <View style={{height: '50%', paddingTop: 50 }}>
        <MainNav />
      </View>

      <View style={Styles.buttonAction}>
        <TouchableOpacity style={Styles.buy}>
          <Text style={Styles.textBuy}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.sell}>
          <Text style={Styles.textSell}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
