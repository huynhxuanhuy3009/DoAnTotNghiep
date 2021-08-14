//import librarys
import { NavigationContainer } from '@react-navigation/native';
import {Container, Content} from 'native-base';
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
import { useNavigation } from '@react-navigation/native';

//import components
import styles from './styles';

export default function signup() {
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
        </View>
        <View>
          <TextInput
            style={styles.styleTextInput}
            placeholder="Full name"
            placeholderTextColor="#4C4E4D"
            autoCapitalize="none"
            autoCompleteType="off"
          />

          <TextInput
            style={styles.styleTextInput}
            placeholder="newsample@gmail.com"
            placeholderTextColor="#4C4E4D"
            autoCapitalize="none"
            autoCompleteType="off"
          />

          <TextInput
            style={styles.styleTextInput}
            placeholder="Password"
            placeholderTextColor="#4C4E4D"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.styleTextInput}
            placeholder="Confirm password"
            placeholderTextColor="#4C4E4D"
            autoCapitalize="none"
            autoCompleteType="off"
            secureTextEntry={true}
          />
          <View style={{paddingHorizontal:30}}>
            <TouchableOpacity
              style={[
                styles.styleButton,
                {backgroundColor: '#DCEDC1'},
                {marginTop: 60},
              ]}
              onPress = {() => navigation.navigate('SignIn')}
            >
              <Text style={[{color: '#106C4A', fontSize: 25}]}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Content>
    </Container>
  );
}
