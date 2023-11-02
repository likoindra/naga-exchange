import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';
import {PersonIcon} from '../../assets/Svg';
// import Heroicon from '@react-native-heroicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

// import EntypoIcon from 'react-native-vector-icons/Entypo';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const togglePasswordVisibility = () => {
    setForm(prev => ({...prev, showPassword: !prev.showPassword}));
  };

  const dummy = {
    name: 'Dummy',
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <Text style={Styles.textLogin}>Login</Text>
        <View style={Styles.wrapper}>
          <MIIcon name="account-outline" size={24} color="#00000066" />
          <TextInput
            style={Styles.input}
            placeholder="Email"
            placeholderTextColor="#00000066"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={false}
            value={form.email}
            onChangeText={e => setForm(prev => ({...prev, email: e}))}
          />
        </View>

        <View style={Styles.wrapper}>
          <View style={Styles.value}>
            <View style={Styles.containerInput}>
              <MIIcon name="key-variant" size={22} color="#00000066" />
              <TextInput
                style={Styles.input}
                placeholder="Password"
                placeholderTextColor="#00000066"
                autoCapitalize="none"
                textContentType="password"
                secureTextEntry={!form.showPassword}
                autoCorrect={false}
                value={form.password}
                onChangeText={e => setForm(prev => ({...prev, password: e}))}
              />
            </View>

            <TouchableOpacity
              style={Styles.iconButton}
              onPress={togglePasswordVisibility}>
              <Icon
                name={form.showPassword ? 'eye' : 'eye-slash'}
                size={22}
                color="#00000066"
              />
            </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity
          style={
            !form.email || !form.password
              ? Styles.disabled
              : Styles.buttonAction
          }
          disabled={!form.email || !form.password}
          onPress={() => navigation.navigate('home-screen', {props: dummy})}>
          <Text style={Styles.textButton}>Masuk ke Akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
