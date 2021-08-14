import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles= StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    },
    style_search:{
        flexDirection :'row',
        borderRadius:15, 
        borderWidth:0.5, 
        marginVertical:10,
        marginHorizontal:10
    }, 
    design_text_input : {
      
        width:width*0.8, 
        height:height*0.05,
        
    },
    design_icon_search:{
      paddingVertical:5,
      paddingHorizontal:10
         
    }, 
    dropDownContent: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropDown: {
        height: 40,
        width: width * 0.6,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    styleButton: {
        height: 55,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    },
});

export default styles;