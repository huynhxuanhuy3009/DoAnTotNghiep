import { Body, Container, Content, Footer, Header, Left, Right,Icon, ListItem , List} from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import {useNavigation} from '@react-navigation/native';


import styles from './styles'
const {width, height} = Dimensions.get('window');
export default function Layout_admin() {
    const navigation = useNavigation();
    return (
        <Container>
            <Header style={styles.container}>
                <Left>
                    <TouchableOpacity>           
                        <Icon name="menu" type="Entypo" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontSize:20}}>Wellcome To Admin</Text>
                </Body>
                <Right>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('SignIn')}
                    >           
                        <Icon name="logout" type="AntDesign" />
                    </TouchableOpacity>
                </Right>
            </Header>

            <Content>
      {/* Khoảng trắng giữa các list */}
      <List>
            <ListItem itemDivider   
              style={{backgroundColor:'#E0D7D7'}}
            >
                
            </ListItem>
               
            <ListItem>
                <TouchableOpacity 
                   onPress={() => navigation.navigate('Add_Product_admin')}
                    style={[styles.style_button]}
                   
                >
                <View style={{width:width*0.1}}>
                    <Icon
                        name= "md-add-circle-sharp"
                        type="Ionicons"
                    />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Add Product</Text>
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
                <TouchableOpacity 
                    style={[styles.style_button]}
                    onPress={() => navigation.navigate('Edit_Product_admin')}
                >
                <View style={{width:width*0.1}}>
                   
                        <Icon name="edit" type="FontAwesome5" />
                    
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Edit Product</Text>
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
                <TouchableOpacity 
                    style={[styles.style_button]}
                    onPress={() => navigation.navigate('Delete_Product_admin')}
                >
                <View style={{width:width*0.1}}>
                     <Icon name="delete" type="MaterialCommunityIcons" />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Delete Product</Text>
                </View>
                <View style={{width:width*0.15}}>
                    
                    <Icon 
                        name="navigate-next" 
                        type="MaterialIcons" 
                    /> 
                </View>
                </TouchableOpacity>
            </ListItem>                   

                
             {/* khoảng trắng giữa các list */}
            <ListItem itemDivider   
                style={{backgroundColor:'#E0D7D7'}}
            >
                       
            </ListItem>

            <ListItem>
                <TouchableOpacity style={[styles.style_button]}>
                <View style={{width:width*0.1}}>
                     <Icon name="file-invoice-dollar" type="FontAwesome5" />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Invoice Manage</Text>
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
                <View style={{width:width*0.1}}>
                     <Icon name="history" type="FontAwesome5" />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Sale History</Text>
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
                <View style={{width:width*0.1}}>
                     <Icon name="calendar-day" type="FontAwesome5" />
                </View>
                <View style={{flex:1,justifyContent:'center'}}> 
                    <Text>Sales Statistics</Text>
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
            </Content>
            <Footer style={styles.container}>

            </Footer>
        </Container>
    )
}
