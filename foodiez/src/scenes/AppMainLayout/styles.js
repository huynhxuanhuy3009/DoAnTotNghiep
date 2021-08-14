import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    },
    style_button:{
        flexDirection:'row',
        width:width*1,
    },
    style_button_contact:{
        flexDirection:'row', 
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'space-between',
        width:width*0.2,
        paddingTop:3
    },
    style_button_order: {
        height: 55,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
      },
});

export default styles;