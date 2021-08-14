import React from 'react'
import {Body, Container, Content, Footer, Header, Left, Right, Icon, FooterTab, Button, } from 'native-base'
import { View, Text, TouchableOpacity , Dimensions, Image, TextInput, FlatList} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import styles from './styles'   
import SearchBar, {search} from '../../components/search/index'
import fakeData from '../../fakedata/index'

const {width, height} = Dimensions.get('window');

export default function Share_Layout() {
    const navigation = useNavigation();

    return (
        <Container>
            {/* PHẦN ĐẦU */}
            <Header style={styles.container}>
                <Left>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('MainLayout')}
                    >
                    <Icon 
                        name="arrow-back"
                        type="Ionicons" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontSize:20}}>Share</Text>
                </Body>
                <Right>
                    <TouchableOpacity>
                        <Icon
                            name="menu" 
                            type= "Entypo"
                        />
                    </TouchableOpacity>                  
                </Right>
            </Header>

            {/* PHẦN THÂN */}
            <Content style={{width:width*1}}>
                <SearchBar/>
                
                <View  style={{paddingHorizontal:20}}>
                    <Text style={{fontSize:20}}>Share to ...</Text>
                    <View style={{
                            flexDirection:'row', 
                            justifyContent:'space-around',
                            paddingTop:10,
                        }}
                    >
                        <TouchableOpacity>
                            <Image 
                                source={require('../../assets/images/logo_facebook.png')}
                                style={{width:width*0.18, height:height*0.1}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../assets/images/logo_instagram.png')}
                                style={{width:width*0.18, height:height*0.1}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../assets/images/logo_messs.png')}
                                style={{width:width*0.18, height:height*0.1}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source={require('../../assets/images/logo_zalo.jpg')}
                                style={{width:width*0.18, height:height*0.1}}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{paddingTop:10, flexDirection:'row-reverse'}}>
                        <Text style={{fontSize:20}}>More ...</Text>
                    </TouchableOpacity>
                </View>
                
               
                <View style={styles.style_text_input}>
                    <TextInput
                        multiline={true}
                        textAlignVertical="top"
                        placeholder='Say something...'
                        style={{
                                padding:10, 
                                fontSize:20,
                                width: width * 0.7,
                                height: height * 0.15,
                            }}

                    />   
                    <View style={{flexDirection:'row', flexDirection:'row-reverse'}}>
                        <TouchableOpacity style={{paddingHorizontal:3}}>
                            <Icon
                                name='poll' type='FontAwesome5'
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{paddingHorizontal:3}}>
                            <Icon
                                name='camera' type='Entypo'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal:3}}>
                            <Icon
                                name='emoticon-excited' type='MaterialCommunityIcons'
                            />
                        </TouchableOpacity>
                    </View> 
                </View>

                <View
                    style={{paddingHorizontal:20, paddingTop:20}}
                >
                    <Image 
                        source={require('../../assets/images/bokho_foody_image.jpg')}
                        style={{width:width*0.6, height:height*0.3, borderRadius:10}}
                    />
                    <Text style={{fontSize:20}}>Chicken noodle Soup</Text>
                    <Text style={{fontSize:20}}>$ 5.2</Text>

                    <View 
                        style={styles.style_gradient}
                    >
                        <Text>Gradients: </Text>
                        <Text>Chicken, noodle, onion, scallion,...</Text>
                    </View>
                </View>
                
            </Content>

            {/* PHẦN ĐUÔI */}
            <Footer >
                <FooterTab style={styles.container}>
                    <Button vertical 
                        // onPress={()=> navigation.navigate('HomeFoody')}
                    >
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
    )
}
