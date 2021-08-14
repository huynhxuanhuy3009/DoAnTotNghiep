import { Body, Container, Content, Footer, Header, Left, Right, Icon, List, ListItem } from 'native-base'
import React, {useState} from 'react'
import { View, Text , TouchableOpacity, Dimensions, TextInput} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';



import styles from './styles'
const {width, height} = Dimensions.get('window');


export default function index() {
    const navigation = useNavigation();
    const [isSelect, setSelect] = useState(false);
    const [isSelect1, setSelect1] = useState(false);

    return (
        <Container >
            <Header style={styles.container}>
                <Left>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Layout_admin')}
                    >
                        <Icon 
                            name="arrow-back"
                            type="Ionicons" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontSize:20}}>Add Product</Text>
                </Body>
                <Right></Right>
            </Header>

            <Content>

                <List>
                    <ListItem style={{flexDirection:'column'}}>
                        <Text style={styles.style_product_image}>Product Image</Text>
                        <View style={styles.style_button_product_image}>

                            <View style={{paddingHorizontal:width*0.3}}>
                                <TouchableOpacity style={styles.style_child_button}>
                                    <Icon
                                        name="plus"
                                        type="AntDesign"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingHorizontal:width*0.1}}>
                                <TouchableOpacity style={styles.style_child_button}>
                                    <Icon
                                        name="plus"
                                        type="AntDesign"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingHorizontal:width*0.3}}>
                                <TouchableOpacity style={styles.style_child_button}>
                                    <Icon
                                        name="plus"
                                        type="AntDesign"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ListItem>

                    <ListItem>
                        <View style={{flexDirection:'column'}}>
                            <View style={styles.style_distance_view}>
                                <Text style={{ fontWeight: "bold"}}>Name</Text>
                                <TextInput
                                    style={styles.styleTextInput}
                                    placeholder="Name Product"
                                    placeholderTextColor="#ABB3AF"
                                    autoCapitalize="none"
                                />
                            </View>
                            <View style={[styles.style_distance_view,{flexDirection:'column'}]}>
                                <Text style={{ fontWeight: "bold"}}>Type</Text>
                                <View style={{flexDirection:'row'}}>
                                    <CheckBox       
                                        disabled={true}                                
                                        value={isSelect}
                                        onValueChange= {setSelect}
                                    />
                                    <Text style={{fontSize:25}}>Food</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <CheckBox                                       
                                        value={isSelect1}
                                        onValueChange= {setSelect1}
                                    />
                                    <Text style={{fontSize:25}}>Drink</Text>
                                </View>
                            </View>

                            <View style={styles.style_distance_view}>
                                <Text style={{ fontWeight: "bold"}}>Price</Text>
                                <TextInput
                                    style={styles.styleTextInput}
                                    placeholder="$0.00"
                                    placeholderTextColor="#ABB3AF"
                                    autoCapitalize="none"
                                />
                            </View>

                            <View style={styles.style_distance_view}>
                                <Text style={{ fontWeight: "bold"}}>Gradients</Text>
                                <TextInput
                                    style={styles.styleTextInput}
                                    placeholder="Ingredients..."
                                    placeholderTextColor="#ABB3AF"
                                    autoCapitalize="none"
                                />
                            </View>
                            <TouchableOpacity
                                style={[
                                    styles.styleButton,
                                    {backgroundColor: '#DCEDC1'},
                                    {marginTop: 60},
                                ]}
                                // onPress={() => navigation.navigate('MainLayout')}
                                >
                                <Text style={[{color: '#106C4A', fontSize:25}]}>UPLOAD</Text>
                            </TouchableOpacity>
                        </View>
                   </ListItem>
                </List>

            </Content>

            <Footer style={styles.container}>

            </Footer>
        </Container>
    )
}
