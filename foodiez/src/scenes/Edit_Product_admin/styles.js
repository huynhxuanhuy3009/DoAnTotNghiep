import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    },
    style_product_image:{
        flexDirection:'column',
        justifyContent:'center', 
        paddingBottom:20, 
    },
    style_button_product_image:{
        flexDirection:'row',
        justifyContent:'space-evenly', 
        
    },
    style_child_button:{
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal:width*0.07,
        paddingVertical:width*0.07,
        backgroundColor: '#CECCCC',
    }, 
    styleTextInput: {
        height: 35,
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor:'#fff' , 
        width:width*0.9
        
    },
    style_distance_view:{
        paddingVertical:width*0.02
    }, 
    styleButton: {
        height: 55,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    },
});

export default styles;