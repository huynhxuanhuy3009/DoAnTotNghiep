import { Container, Content } from 'native-base'
import React from 'react'
import { View, Text , Image, ActivityIndicator, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native';

import styles from './styles'



export default function MainLayout() {
    const navigation = useNavigation();

    return (
        <Container style={styles.container}>
           <Content>
            <View style={styles.style_logo_foodize}>
                <Image source={require('../../assets/images/logo_foodize.png')} />
                <Text
                style={{
                    color: '#FFD3B6',
                    fontSize: 100,
                    fontStyle: 'normal',
                    paddingtop: 5,
                    paddingBottom: 30,
                }}>
                Foodiez
                </Text>
            </View>
            <View style={styles.style_logo_foodize}>
               <Text style={{fontSize:30, paddingBottom:100}}>
                   Wellcome To My Store
                </Text>
                <ActivityIndicator size="large" color="##0000ff" />
           </View>
           <View style={{paddingHorizontal:20, paddingVertical:30}}>
                <TouchableOpacity 
                    style={[styles.styleButton,
                    {backgroundColor: '#DCEDC1'}, 
                    {paddingHorizontal:30}
                    ]} 
                    onPress = {() => navigation.navigate('AppMainLayout')}           
               >
                   <Text style={[{color: '#106C4A', fontSize:25}]} >Skip</Text>
               </TouchableOpacity>
           </View>
               
           
           </Content>
           
        </Container>
    )
}
