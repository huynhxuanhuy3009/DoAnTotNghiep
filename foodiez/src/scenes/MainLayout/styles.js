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
    styleButton: {
        height: 55,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
      },
});

export default styles;