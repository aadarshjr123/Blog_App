import React, { useContext } from 'react';
import {View, StyleSheet, Text , TouchableOpacity,Image} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
   // console.log(navigation.getParam('id'));
   const navigId = navigation.getParam('id');

    const {state} = useContext(Context);

   const blogPost = state.find((blogPost) => blogPost.id === navigId);
    return (
        <View >
            <Text style = {styles.center}>{blogPost.title}</Text>
            {/* <Image source = {{uri:'https://www.investopedia.com/thmb/6Csf9SY8iD_DnBsLXHzDZBVlFPQ=/735x0/shutterstock_169450007-5bfc2f7f46e0fb002602296e.jpg'}}
        style={styles.image}
        /> */}
            <Text style = {styles.center}>{blogPost.content}</Text>
            
        </View>
    );
};


ShowScreen.navigationOptions = ({ navigation}) => {

    return {
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit' ,{ id: navigation.getParam('id') } )}>
                <Feather style={styles.plus} name="edit-2" size={25} />
                
                </TouchableOpacity>

                
    };
};



const styles = StyleSheet.create({
   center:{
         textAlign:"center",
         fontSize:30,
         fontWeight:"bold",
         padding:10,
         flexDirection:"column"
        
   },
    plus:{
        marginRight: 5
    },
    image:{
        height:200,
        width:400,
        marginLeft:25,
        marginTop:20,
        marginBottom:50
    }
});


export default ShowScreen;