//import library
import React , {useState, useEffect}from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput
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
  CardItem, 
  Card
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';


//import components
import styles from './styles';
import fakeData from '../../fakedata/index';
import SearchBar from '../../components/search';
import {Notification} from '../../components/notification';
const {width, height} = Dimensions.get('window');

export default function HomeFoody() {
    const navigation = useNavigation();

    const [value, setvalue] = useState(0);
    
    const soluongtang = () => {
        setvalue(value + 1) ;
    };  
    const soluonggiam = () => {
        setvalue(value - 1) ;
    };  

    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setSearch] = useState([]);


    const Item = ({title, image, price}) => (  
        <TouchableOpacity
            style={styles.design_info_product}
            onPress={() => navigation.navigate('Layout_Order')}
        >
            <View cardBody>
                <Image style={styles.design_image} source={image} />
            </View> 
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color: '#3C3C3C'}}>{title}</Text>
        
                    <Text style={{color: '#262020'}}>{price}</Text>
                </View>
                
                <View style={{paddingTop:10, flexDirection:'row'}}> 
                        <TouchableOpacity 
                            onPress={()=> soluonggiam(setvalue)}                           
                        >                               
                                <Icon 
                                    style={{color:'black'}}
                                    name="minus"
                                    type= "EvilIcons"
                        />
                        </TouchableOpacity>       
                        <Text>{value ? value : null}</Text>
                        <TouchableOpacity 
                            onPress={()=> soluongtang(setvalue)}
                        >             
                                <Icon 
                                    style={{color:'green'}}
                                    name="plus"
                                    type= "EvilIcons"
                        />
                        </TouchableOpacity>  
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({item}) => (
        <Item title={item.title} image={item.image} price={item.price} />
    );

    const reder_Title_Item = (item) => (
        <View>
            <Text style={{color:'red'}}>{item?.title||''}</Text>
        </View>
    );

    useEffect(() => {
        fetchPosts()
        return () => {         
        }
    }, [])
   
    //connect API
    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
            .then((response) => response.json())
            .then((reponseJson) =>{
                setfilterData(reponseJson);
                setmasterData(reponseJson);
            })
            .catch(()=>{
                console.error('error')
            })
    }
    
    const searchFilter = (text) =>{
        if (text) {
            const newData = masterData.filter((item) => {
                    const itemData = item.title 
                            ?item.title.toUpperCase()   
                            :''.toUpperCase();
                    const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setSearch(text);
        }
        else {
            setfilterData(masterData);
            setSearch(text);
        }
    }

    const ItemView = ({item}) => {
        return(
            <Text style={{padding:15}}>{item.id}{'.'}{item.title.toUpperCase()}</Text>
        )
    } 

    const ItemSeparatorView = () => {
        return(
           < View
                style={{height:0.5, width:'100%', backgroundColor:'#c8c8c8c'}}
           />
        )
    }

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
                <View style={styles.view_input}>
                    <TextInput style={{width:width*0.8}} 
                        value={search}
                        placeholder="Search" 
                        underlineColorAndroid='transparent'
                        onChangeText = {(text) => searchFilter(text)}
                    />

                    <ModalDropdown 
                        options={fakeData}
                        renderRow={reder_Title_Item}
                        // style={{width:width*1,borderTopEndRadius:2}}
                        dropdownTextStyle={{width:width*0.8,borderTopEndRadius:2}}
                    
                    >
                        <Icon 
                            style ={styles.design_icon_search}
                            name="search1" type="AntDesign"
                    />
                    </ModalDropdown>
                   
                </View>
                    <FlatList
                        data={filterData}
                        keyExtractor={(item, index)=>index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                <View>
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

                    <ScrollView horizontal={true}>
                        <FlatList
                        data={fakeData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        />
                    </ScrollView>
                </View> 
            
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity 
                    style={{
                        width:width*0.7, 
                        height:height*0.05, 
                        backgroundColor:'#A0A0A0',
                        justifyContent:'center'}}>
                    <Text style={{color:'#fff'}}>30,000d</Text>    
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress= {() => navigation.navigate('Layout_Order')}
                    style={{    
                        width:width*0.3, 
                        height:height*0.05, 
                        backgroundColor:'#0C4FA8',
                        flexDirection:'row', 
                        justifyContent:'space-around', 
                        alignItems:'center'}}>
                    <Text style={{color:'#fff'}}>Giao Hàng</Text> 
                    <Icon style={{color:'#fff'}} name = "arrowright" type = "AntDesign" />
                </TouchableOpacity>
            </View>
            
        </Content>
        
        <Footer>
            <FooterTab style={styles.container}>
            <Button vertical>
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
