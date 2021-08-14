import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    }, 
    design_image: {
        width:width*0.38,
        height:height*0.15, 
        borderRadius: 15,
    }, 
    design_info_product:{
        paddingVertical:10,
        paddingHorizontal:10, 
        
    }
});

export default styles;