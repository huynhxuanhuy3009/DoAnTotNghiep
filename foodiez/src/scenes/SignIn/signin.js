//import library
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Container, Content} from 'native-base';
import { useNavigation } from '@react-navigation/native';

//import components
import styles from './styles';


const {width, height} = Dimensions.get('window');
export default function SignIn() {

    const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Content>
        <View>
          <View style={styles.style_logo_foodize}>
            <Image source={require('../../assets/images/logo_foodize.png')} />
            <Text
              style={{
                color: '#FFD3B6',
                fontSize: 100,
                fontStyle: 'normal',
                paddingtop: 5,
                paddingBottom: 30,
              }}>
              Foodiez
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.styleTextInput}
              placeholder="username"
              placeholderTextColor="#4C4E4D"
              autoCapitalize="none"
              autoCompleteType="username"
            />

            <TextInput
              style={styles.styleTextInput}
              placeholder="password"
              placeholderTextColor="#4C4E4D"
              autoCapitalize="none"
              secureTextEntry={true}
              autoCompleteType="password"
            />

            <TouchableOpacity
              style={[styles.styleButtonForget]}
              onPress={() => Alert.alert('Nhập lại mật khẩu!')}>
              <Text style={{color: '#0A5830', marginRight: 40}}>
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal:30}}>
            <TouchableOpacity
              style={[
                styles.styleButton,
                {backgroundColor: '#DCEDC1'},
                {marginTop: 60},
              ]}
              onPress={() => navigation.navigate('MainLayout')}
            >
              <Text style={[{color: '#106C4A', fontSize:25}]}>SIGN IN huy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.styleButton,
                {backgroundColor: '#DCEDC1'},
                {marginTop: 30},
              ]}
              onPress= {() => navigation.navigate('Layout_admin')}
            >
              <Text style={[{color: '#106C4A', fontSize:25}]}>CREATE NEW</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
}
