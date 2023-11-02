import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import Styles from './styles';
import Container from '../../components/Container';
import Searchbar from '../../components/Searchbar';
import {DATA} from './data';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const formatIDR = value => {
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedValue}`;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState(DATA.data);

  const handleSearch = value => {
    if (value.length === 0) {
      setSearchTerm(DATA.data);
    }

    const filteredData = DATA.data.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length === 0) {
      setSearchTerm(DATA.data);
    } else {
      setSearchTerm(filteredData);
    }
  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={Styles.containerCard}
        onPress={() => navigation.navigate('detail-screen', {props: item})}>
        <View style={Styles.contentCard}>
          <View style={Styles.wrapperImage}>
            <Image source={{uri: item.icon}} style={Styles.images} />
          </View>
          <View style={Styles.textContent}>
            <Text
              style={Styles.textHeader}>{`${item.name} / ${item.pair}`}</Text>
            <Text style={Styles.textMid}>{`${item.pair} ${formatIDR(
              item.min_pair_transaction,
            )}`}</Text>
            <Text style={Styles.textFooter}>vol {item.vol}</Text>
          </View>

          <View
            style={
              item.change.includes('-')
                ? Styles.buttonCard
                : Styles.buttonCardGreen
            }>
            <Text style={Styles.textChange}>
              {`${item.change.includes('-') ? item.change : '+' + item.change}`}
              %
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <Container style={Styles.container}>
      <LinearGradient
        colors={['rgba(249, 0,  254, 0.31)', 'rgba(1, 10, 25, 0.25)']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.8, y: 0.8}}
        style={Styles.circleShapeViewTop}>
        <View style={Styles.circle} />
      </LinearGradient>

      <LinearGradient
        colors={['rgba(78, 205,  196, 1)', 'rgba(85, 98, 112, 0)']}
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.8, y: 0.8}}
        style={Styles.circleShapeViewBottom}>
        <View style={Styles.circle} />
      </LinearGradient>

      <SafeAreaView>
        <View style={Styles.header}>
          <View style={Styles.wrapperSearch}>
            <Searchbar
              placeholder="Cari aset"
              onChangeText={handleSearch}
              value={searchTerm}
            />
          </View>
        </View>
      </SafeAreaView>

      <View>
        <FlatList
          data={searchTerm}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={Styles.contentStyle}
          ListHeaderComponent={<View style={{paddingTop: 18}}></View>}
        />
      </View>
    </Container>
  );
};

export default HomeScreen;
