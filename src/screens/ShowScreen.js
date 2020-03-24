import React, { useContext } from 'react';
import {View, StyleSheet, Text , TouchableOpacity} from 'react-native';
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
    }
});


export default ShowScreen;