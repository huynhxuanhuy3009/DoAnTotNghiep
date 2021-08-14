import {StyleSheet, Dimensions} from 'react-native'


const {width, height} = Dimensions.get('window');
const styles =StyleSheet.create({
    style_background:{
        backgroundColor:'#A8E6CF'
    },
    style_list:{
        paddingHorizontal:15
    },
    style_listitem:{
        flexDirection:'row', 
        marginHorizontal:width*0.05, 
        backgroundColor:'#BFBEBE', 
        borderRadius:5, 
        borderWidth:0.5, 
        justifyContent:'space-evenly'
    },
    style_item:{
        flexDirection:'row', 
        marginHorizontal:width*0.03,
        marginVertical:width*0.03, 
        borderRadius:5, 
        borderWidth:0.5
    }, 
    style_button:{
        justifyContent:'center', 
        alignItems:'center', 
        paddingHorizontal:50, 
        paddingVertical:20
    }
}); 

export default styles ;