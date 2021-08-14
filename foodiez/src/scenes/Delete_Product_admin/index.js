import { Body, Container, Content, Footer, Header, Left, Right, Icon, List, ListItem } from 'native-base'
import React, {useState} from 'react'
import { View, Text , TouchableOpacity, Dimensions, TextInput, FlatList, Alert} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';



import styles from './styles'
import SearchBar from '../../components/search';
import fakeData from '../../fakedata/index'


const{width, height} = Dimensions.get('window');
export default function Delete_Product_admin() {
    // const[isSelect, listSelect] = useState('');
    // const renderItem = ({item}) => (
    //    <Text>{item?.title||''}</Text>
    // );
    const navigation = useNavigation();
    const [isSelect, setSelect] = useState(false);
    const Item = ({title}) => (    
                <ListItem>
                    
                        <TouchableOpacity
                            style={{
                                flexDirection:'row', 
                                justifyContent:'space-evenly',                            
                            }}
                            onLongPress={() =>{
                                Alert.alert('Delete Product', 'Do you want delete product ?',
                                            [
                                                {
                                                    style:"cancel", 
                                                    text:'No'
                                                }, 
                                                {
                                                    style:"destructive", 
                                                    text:'yes'
                                                }
                                            ])
                            }}
                        >
                            
                                    <CheckBox
                                        style={{width:width*0.2}}       
                                        disabled={false}                                
                                        value={isSelect}
                                        onValueChange= {setSelect}
                                    />
                                    <View style={{width:width*0.6}} >
                                    <Text style={{fontSize:25}}>{title}</Text>
                                    </View>
                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="edit" type="FontAwesome"/>
                        </TouchableOpacity>
                  
                </ListItem>   
    );
    
    const renderItem = ({item}) => (
        <Item 
            title={item.title}
        />
    );

      
    return (
        <Container>
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
                    <Text style={{fontSize:20}}>Delete Product</Text>
                </Body>
                <Right></Right>
            </Header>
            <Content>
                <View>
                    <View style={styles.style_search}>
                        <TextInput style={styles.design_text_input} 
                            placeholder="Search" />

                        <TouchableOpacity >
                            <Icon 
                                style ={styles.design_icon_search}
                                name="search1" type="AntDesign"
                            />
                        </TouchableOpacity>
                    </View> 
                    <View style={styles.dropDownContent}>
                        <ModalDropdown 
                             options={['option 1 ', 'option 2']}
                            // renderRow={renderItem}
                            placeholder="click here"
                        >    
                        <View 
                            style={[  
                                    styles.dropDown, 
                                    {flexDirection:'row',justifyContent:'space-evenly'}
                                ]}
                        >
                            <Text>click here</Text>
                            <Icon name="chevron-thin-down" type="Entypo"/>   
                        </View>      
                        </ModalDropdown>
                        
                    </View> 

                    <List>
                        <ListItem>
                        <FlatList
                            data={fakeData}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                        </ListItem>
                    </List>   
                    <TouchableOpacity
                                style={[
                                    styles.styleButton,
                                    {backgroundColor: '#DCEDC1'},
                                    {marginVertical: 30}, 
                                    {marginHorizontal:20}
                                ]}
                                // onPress={() => navigation.navigate('MainLayout')}
                                >
                                <Text style={[{color: '#106C4A', fontSize:25}]}>DELETE</Text>
                    </TouchableOpacity>               
                </View>
                
            </Content>
        </Container>
    )
}
