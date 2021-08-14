//import library
import React from 'react'
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
    ListItem,
  } from 'native-base';
  import { useNavigation } from '@react-navigation/native';
  //import components
  import styles from './styles';
  import SearchBar from '../../components/search';


  const {width, height} = Dimensions.get('window');
  const fakedata = [
    {
      id: 1,
      title: 'Coffee',
      image: require('../../assets/images/coffee_drink_image.jpg'),
      price: '$ 3',
    },
    {
      id: 2,
      title: ' fruitjuice ',
      image: require('../../assets/images/fruitjuice_drink_image.jpg'),
      price: '$ 5',
    },
    {
      id: 3,
      title: 'tea',
      image: require('../../assets/images/tea_drink_image.jpg'),
      price: '$ 2',
    },
    {
      id: 4,
      title: 'yaouort',
      image: require('../../assets/images/yaourt_drink_image.jpg'),
      price: '$ 2',
    },  
  ];

  const Item = ({title, image, price}) => (
    <View style={styles.design_info_product}>
    <Image  
        style={styles.design_image}
        source={image} 
    />
    
    <Text 
        style={{color: '#3C3C3C'}}
    >
        {title}
    </Text>

    <Text
        style={{color: '#262020'}}
    >
        {price}
    </Text>
  </View>
  );

export default function DrinkFoody() {
    const navigation = useNavigation()
    const renderItem = ({item}) => (
        <Item title={item.title} image={item.image} price={item.price} />
      );

    return (
        <Container style={styles.container}>
         <Header style={styles.container}>
        <Left>
            <TouchableOpacity
                onPress={() => navigation.navigate('AppMainLayout')}
            >
                <Icon 
                    name="arrow-back"
                    type="Ionicons" />
            </TouchableOpacity>        
        </Left>

        <Body>
          <Title style={{color: '#640105'}}>Category</Title>
        </Body>

        <Right>
            <TouchableOpacity>
                <Icon name="menu" type="Entypo" />
            </TouchableOpacity>
        </Right>
      </Header>

      <Content>
        <View>
                <SearchBar/>
                <View>
                 <Image
                    source={require('../../assets/images/bokho_foody_image.jpg')}
                    style={{
                    width: width * 1,
                    height: height * 0.2,
                    borderRadius: 15,
                    }}
                />
                </View>
        
                <ScrollView 
                  horizontal= {true}
                >
                <FlatList
                    data={fakedata}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}  
                    numColumns={3}
                />
                </ScrollView>
        </View>
      </Content>

      <Footer>
        <FooterTab style={styles.container}>
          <Button vertical
            onPress = {() => navigation.navigate('HomeFoody')}
          >
            <Icon
              style={{color: '#DCEDC1'}}
              name="home-outline"
              type="Ionicons"
            />
            <Text>Food</Text>
          </Button>

          <Button vertical>
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
    )
}
