import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    },
    style_text_input:{
        flex: 0.3,
        backgroundColor: "beige",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal:width*0.05, 
        marginTop:20
    },
    style_gradient:{
        paddingVertical:10, 
        backgroundColor: "beige",
        borderRadius:15, 
        borderWidth:0.5, 
        padding:10, 
        marginVertical:20
    }
});

export default styles;