import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    }, 
    view_input:{
        flexDirection :'row',
        borderRadius:15, 
        borderWidth:0.5, 
        marginVertical:10,
        marginHorizontal:10
    },
    design_icon_search:{
        paddingTop:10,
        paddingLeft:20,        
     },
    design_image: {
        width:width*0.38,
        height:height*0.15, 
        borderRadius: 15,
    }, 
    design_info_product:{
        paddingVertical:10,
        paddingHorizontal:10, 
        flexDirection:'column',
        backgroundColor:'#E7E1E1', 
        borderRadius:15, 
        marginHorizontal:3,
        marginVertical:3
    }
});

export default styles;