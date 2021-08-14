//import library
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Container,
  Content,
  Footer,
  Left,
  Icon,
  Body,
  Right,
  Header,
  Title,
  FooterTab,
  Button,
  Box,
  ListItem,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
//import commponent
import styles from './styles';
const {width, height} = Dimensions.get('window');

export default function Cart() {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Header style={styles.container}>
        <Left>
          <TouchableOpacity>
            <Icon name="menu" type="Entypo" />
          </TouchableOpacity>
        </Left>

        <Body>
          <Title style={{color: '#640105'}}>Cart</Title>
        </Body>

        <Right>
          <TouchableOpacity style={{paddingRight: 15}}>
            <Icon name="search1" type="AntDesign" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="filter" type="AntDesign" />
          </TouchableOpacity>
        </Right>
      </Header>

      <Content>
        <View style={styles.design_product_cart}>
          <View style={styles.info_image_product_cart}>
            <Image
              style={{
                width: width * 0.35,
                height: height * 0.15,
                borderRadius: 10,
              }}
              source={require('../../assets/images/salad_foody_image.jpg')}
            />
            <Text>$ 5</Text>
          </View>
          
         
        </View>
      </Content>

      <Footer>
        <FooterTab style={styles.container}>
          <Button vertical onPress={() => navigation.navigate('HomeFoody')}>
            <Icon
              style={{color: '#DCEDC1'}}
              name="home-outline"
              type="Ionicons"
            />
            <Text>Food</Text>
          </Button>

          <Button vertical onPress={() => navigation.navigate('DrinkFoody')}>
            <Icon name="drink" type="Entypo" />
            <Text>Drink</Text>
          </Button>

          <Button vertical>
            <Icon name="border-color" type="MaterialCommunityIcons" />
            <Text>Order</Text>
          </Button>

          <Button vertical>
            <Icon name="account" type="MaterialCommunityIcons" />
            <Text>Account</Text>
          </Button>

          <Button vertical>
            <Icon name="appstore-o" type="AntDesign" />
            <Text>Others</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
