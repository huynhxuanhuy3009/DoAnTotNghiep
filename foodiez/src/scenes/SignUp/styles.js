import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    },
    
    style_logo_foodize : {
        alignItems : 'center',
        paddingTop : 30,
       
    },
    styleTextInput: {
       height: 50,
       margin: 30,
       borderWidth: 1,
       borderRadius: 10,
       paddingHorizontal: 16,
       marginVertical: 10,
       backgroundColor:'#fff'   
     },
     styleButtonForget: {
       alignItems: 'flex-end',
     },
     styleButton: {
       height: 55,
       borderRadius: 20,
       alignItems: 'center',
       padding: 10,
     },
});

export default styles;