import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {
  Container,
  Content,
  Footer,
  Header,
  Body,
  Right,
  Left,
  Icon,
  List,
  ListItem,
  FooterTab,
  Button,
  Toast
} from 'native-base';

const {width, height} = Dimensions.get('window');
export default function AppMainLayout() {
  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <Header style={styles.container}>
        <Left>
            <TouchableOpacity
                onPress={() => navigation.navigate('MainLayout')}
            >
                <Icon 
                    name="arrow-back"
                    type="Ionicons" />
            </TouchableOpacity>
        </Left>

        <Body>
          <Text style = {{fontSize:20}}>
              Foodiez
          </Text>
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

      <Content>
        <View>
        <Image
              source={require('../../assets/images/main_image.jpg')}
              style={{
                width: width * 1,
                height: height * 0.3,
                borderRadius: 15,
              }}
            />
        </View>

        <List>
            <ListItem>
                <Text style={{fontSize:20}}>Foodiez Store - Thiên Đường Ăn Vặt - Võ Văn Ngân</Text>
            </ListItem>
            <ListItem>
                <TouchableOpacity style={[styles.style_button]}>
                <View style={{width:width*0.1}}>
                    <Icon
                        name= "home-analytics"
                        type="MaterialCommunityIcons"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>3 Chi nhánh cùng hệ thống </Text> 
                </View>
                <View style={{width:width*0.15}}>
                    
                    <Icon 
                        name="navigate-next" 
                        type="MaterialIcons" 
                    /> 
                </View>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <FooterTab style={[styles.container, {flex:1}]}>
                    <Button vertical>
                        <Text>0</Text>
                        <Text>Bình luận</Text>
                    </Button>
                    <Button vertical>
                        <Text>0</Text>
                        <Text>Hình ảnh</Text>
                    </Button> 
                    <Button vertical>
                        <Text>0</Text>
                        <Text>Check in</Text>
                    </Button> 
                    <Button vertical>
                        <Text>0</Text>
                        <Text>Lưu lại</Text>
                    </Button>
                    <Button vertical>
                        <Icon
                            style={{color:'blue'}}
                            name="areachart"
                            type="AntDesign"
                            />                       
                    </Button> 
                </FooterTab>
            </ListItem>
            <ListItem>
                <View 
                    style={{
                        flex:1,
                        flexDirection:'row', 
                        justifyContent:'space-between',                      
                    }}
                >
                        <View>
                            <Text style={{color:'blue'}}>ĐANG MỞ CỬA</Text>
                            <Text>09:00 - 22:00</Text>  
                        </View>
                        
                        <View style={{backgroundColor:'#E0D7D7', width:width*0.3, borderRadius:5}}>
                        <TouchableOpacity
                            style={styles.style_button_contact}
                        >
                            <Icon
                                name="quick-contacts-dialer"
                                type="MaterialIcons"
                            />
                            <Text>Liên Hệ</Text>
                        </TouchableOpacity>  
                        </View>
                </View>            
            </ListItem>
            
            <ListItem itemDivider   
              style={{backgroundColor:'#E0D7D7'}}
            >
                <Text>Thông tin</Text>
            </ListItem>
            
            {/* thông tin địa chỉ , thực đơn , giá tiền của store */}
            <ListItem>
                <TouchableOpacity style={{flexDirection:'row', width:width*1,}}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <Icon 
                                style={{fontSize:20}}
                                name='location-pin' 
                                type='Entypo'/>
                            <Text style = {{paddingLeft:5}}>309H Võ Văn Ngân. P.8 Tp.Thủ Đức</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon 
                                style={{fontSize:20}}
                                name='food-fork-drink' 
                                type='MaterialCommunityIcons'/>
                            <Text style = {{paddingLeft:5}}>Dessert/Cafe</Text>
                        </View>
                        <View style={{flexDirection:'row', paddingLeft:5}}>
                            <Icon 
                                style={{fontSize:20}}
                                name='dollar' 
                                type='Foundation'/>
                            <Text style = {{paddingLeft:11}}>3$ - 20$</Text>
                        </View>
                    </View>
                    <Image
                        source={require('../../assets/images/map.png')}
                        style={{
                            width:width*0.4, 
                            height:height*0.1,
                            marginRight:10,
                        }}
                    />
                </TouchableOpacity>
            </ListItem>

            <ListItem itemDivider   
              style={{backgroundColor:'#E0D7D7'}}
            >
                <Text>Danh mục</Text>
            </ListItem>

            {/* danh mục sản phẩm */}
            <ListItem>
                <TouchableOpacity
                    style={[styles.style_button]}
                    onPress={() => navigation.navigate('DanhMuc_SP')}
                >
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Đồ ăn </Text> 
                </View>
                <View style={{width:width*0.15}}>
                    
                    <Icon 
                        name="navigate-next" 
                        type="MaterialIcons" 
                    /> 
                </View>
                </TouchableOpacity>
            </ListItem>
            <ListItem>
                <TouchableOpacity style={[styles.style_button]}>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Thức uống </Text> 
                </View>
                <View style={{width:width*0.15}}>
                    
                    <Icon 
                        name="navigate-next" 
                        type="MaterialIcons" 
                    /> 
                </View>
                </TouchableOpacity>
            </ListItem>
        </List>
        <View style={{paddingHorizontal:10, paddingVertical:30}}>
                <TouchableOpacity 
                    style={[styles.style_button_order,
                    {backgroundColor: '#DCEDC1'}, 
                    {paddingHorizontal:30}
                    ]} 
                    onPress = {() => navigation.navigate('HomeFoody')}           
               >
                   <Text style={[{color: '#106C4A', fontSize:25}]} >Đặt giao hàng</Text>
               </TouchableOpacity>
           </View>
      </Content>

      <Footer style={styles.container}>
        <FooterTab style={styles.container}>
          <Button vertical onPress={()=> navigation.navigate('HomeFoody')}>
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
