import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A8E6CF'
    }, 
    // design_image: {
    //     width:width*0.38,
    //     height:height*0.15, 
    //     borderRadius: 15,
    // }, 
    design_info_product:{
        paddingVertical:10,
        paddingHorizontal:10, 
        
    },
    design_product_cart:{
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.02,
        backgroundColor: '#fff', 
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    info_image_product_cart : {
        flexDirection: 'column',
        justifyContent:'space-between', 
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.01,
    },
    info_product_cart : {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent : 'space-between',
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.01,
        // backgroundColor : 'red'
    }
});

export default styles;