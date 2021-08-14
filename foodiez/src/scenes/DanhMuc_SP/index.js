import { Body, Container, Contentm , Header, Left, Right, Icon, Content, List, ListItem, Thumbnail} from 'native-base'
import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Dimensions} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import styles from './styles'
import fakeData from '../../fakedata/index';
import SearchBar from '../../components/search';
import {Notification} from '../../components/notification/index';
import { useEffect, useState } from 'react'


const {width, height} = Dimensions.get('window');
export default function DanhMuc_SP() {
    const navigation = useNavigation();
    
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([])
    const [loadingData, setloadingData] = useState([]);
    
    const Item = ({image,title,price}) => (
        <List>
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={image}/>
                </Left>
                <Body>
                    <Text>{title}</Text>
                    <Text>{price}</Text>
                </Body>
                <Right>
                    <Notification />
                </Right>
                
            </ListItem>
            
        </List>      
    );
    
    const renderItem = ({item}) => (
        <Item 
            image={item.image} 
            title={item.title}
            price={item.price}
        />
    );

    useEffect(() => {
        fetchPosts()
        return () => {
            
        }
    }, [])

    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/albums';
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setData(responseJson);
                setloadingData(responseJson);
            })
            .catch(()=>{
                console.error('error')
            })
    }
    
    const SearchItem = (text) => {
        if (text){
            const newData = loadingData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setData(newData);
            setSearch(text);
        }
        else{
            setData(loadingData);
            setSearch(text);

        }
    }

    const ItemView = ({item}) => {
      return(
        <TouchableOpacity>
            <Text style={{padding:10}}>{item.id} {'-'} {item.title.toUpperCase()}</Text>
        </TouchableOpacity>
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
                    <Text>Danh Mục Sản Phẩm</Text>
                </Body>
                <Right></Right>
            </Header>
            <Content>
                <View style={styles.view_input}>
                    <TextInput 
                        value={search}
                        style={{width:width*0.8}}
                        placeholder="Search"
                        onChangeText={(text) => SearchItem(text)}
                    />
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem = {ItemView}
                />
                <List>
                    <ListItem>
                        <FlatList
                            data={fakeData}
                            renderItem={renderItem}
                            keyExtractor = {item=>item.id}
                        />
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}
