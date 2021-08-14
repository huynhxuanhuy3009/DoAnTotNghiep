import { Container, Content, Footer, Header, Left, Body, Right , Icon, ListItem, List} from 'native-base';
import React from 'react'
import { View, Text , Dimensions, TouchableOpacity, Image} from 'react-native'
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


const {width, height} = Dimensions.get('window');
export default function Layout_Order() {
    const navigation = useNavigation();
    return (
        <Container>
            <Header style={styles.style_background}>
                <Left>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('HomeFoody')}
                    >
                    <Icon 
                        name="arrow-back"
                        type="Ionicons" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontSize:20}}>Foodiez store </Text>
                </Body>
                <Right>

                </Right>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <View styele={styles.style_list}>
                            <View style={{flexDirection:'row'}}>
                                <Image 
                                    source={require('../../assets/images/map.png')}
                                    style={{width:width*0.25, height:height*0.13, borderRadius:5}}
                                />
                                <View style={{paddingLeft:15}}>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', width:width*0.6}}>
                                        <Text>Giao đến</Text>
                                        <TouchableOpacity>
                                            <Text style={{color:'blue'}}>Sửa</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{paddingVertical:5}}>
                                        <Text>Foodiez_102123 - 0961003973</Text>  
                                        <Text style={{color:'blue'}}>37B Đường số 8, Phường Trường Thọ,</Text>
                                        <Text style={{color:'blue'}}>Tp Thủ Đức</Text>
                                        <Text>3.5 km</Text>
                                    </View> 
                                </View>
                            </View>
                            
                            <View style={{flexDirection:'row', paddingTop:20}}>
                                <Icon
                                    name='clock-time-five'
                                    type='MaterialCommunityIcons'
                                />
                                <View style={{flexDirection:'row',paddingTop:5, paddingLeft:5}}>
                                    <Text style={{color:'green', justifyContent:'center'}}>Giao ngay - 09:40 </Text>
                                    <Text>- Hôm ngay - 05/08/2021</Text>
                                    <TouchableOpacity style={{marginLeft:36}}>
                                            <Text style={{color:'blue'}}>Sửa</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ListItem>
                    
                    <ListItem itemDivider   
                        style={{backgroundColor:'#E0D7D7'}} >
                    </ListItem>

                    <ListItem style={{justifyContent:'space-between'}}>         
                        <Text>Cơm sườn trứng</Text>
                        <Text>25,000d</Text>
                    </ListItem>
                    <ListItem style={{justifyContent:'space-between'}}>         
                        <Text>Tổng 1 phần</Text>
                        <Text>25,000d</Text>
                    </ListItem>
                    <ListItem style={{justifyContent:'space-between'}}>         
                        <Text style={{fontWeight: "bold"}}>Tổng cộng</Text>
                        <Text style={{fontWeight: "bold"}}>25,000d</Text>
                    </ListItem>

                    <ListItem itemDivider   
                        style={{backgroundColor:'#E0D7D7'}} >
                    </ListItem>
                    
                    <ListItem>
                        <View style={{flexDirection:'row', justifyContent:'space-around', width:width*0.9}}>  
                            <TouchableOpacity 
                                style={{justifyContent:'center', alignItems:'center'}}
                            >
                                <Icon name='note' type='SimpleLineIcons'/>
                                <Text>Ghi chú</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{justifyContent:'center', alignItems:'center'}}
                            >
                                <Icon name='burst-sale' type='Foundation'/>
                                <Text>Khuyến mãi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{justifyContent:'center', alignItems:'center'}}
                            >
                                <Icon name='archive' type='Entypo'/>
                                <Text style={{color:'red'}}>No Invoice</Text>
                            </TouchableOpacity>                           
                        </View>
                    </ListItem>

                    <View style={styles.style_listitem}>
                        <View style={styles.style_item}>
                            <View>
                                <TouchableOpacity style={[styles.style_button, {backgroundColor:'##E4E2E2'}]}>
                                    <Text>25,000đ</Text>
                                    <Text>Ví ZaloPay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.style_item, {backgroundColor:'#fff'}]}>
                           
                            <View>
                                 <TouchableOpacity style={styles.style_button}>
                                    <Text>25,000đ</Text>
                                    <Text style={{fontWeight:'bold'}}>Tiền mặt</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            alignItems:'center', 
                            marginHorizontal:width*0.2,
                            marginTop: 30
                        }}
                    >
                        <Text style={{color:'green',fontSize:15}}>Phương thức thanh toán khác</Text>
                    </TouchableOpacity>  
                </List>
                
            </Content>
            <ListItem itemDivider   
                        style={{backgroundColor:'#E0D7D7'}} >
            </ListItem>

            <Footer style={styles.style_background}>
                <TouchableOpacity 
                    style={{flexDirection:'row', 
                            justifyContent:'space-around',
                            alignItems:'center', 
                            width:width*1.2}
                        }>
                    <View>
                        <Text style={{fontSize:17, color:'#5A5757'}}>1 phần</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:17, paddingRight:5, color:'#5A5757'}}>Đặt hàng</Text>
                        <Icon style={{ color:'#5A5757'}} name='arrowright' type='AntDesign'/>
                    </View>
                    <View>
                        <Text style={{fontSize:17, color:'#5A5757'}}>50.000đ</Text>
                    </View>
                </TouchableOpacity>
            </Footer>
        </Container>
    )
}
