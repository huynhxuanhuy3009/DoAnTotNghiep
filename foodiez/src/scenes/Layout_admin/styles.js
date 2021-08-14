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
});

export default styles;