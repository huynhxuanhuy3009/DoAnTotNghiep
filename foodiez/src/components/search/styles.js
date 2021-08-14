import {StyleSheet, Dimensions, BackHandler} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flexDirection :'row',
        borderRadius:15, 
        borderWidth:0.5, 
        marginVertical:10,
        marginHorizontal:10
    }, 
    design_text_input : {
      
        width:width*0.8
    },
    design_icon_search:{
       paddingTop:10,
       paddingLeft:20,        
    }
});

export default styles;