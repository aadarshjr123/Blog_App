import React , {useContext, useEffect} from 'react';
import { StyleSheet, Text, View ,FlatList,Button ,TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather} from '@expo/vector-icons';


const IndexScreen = ({ navigation }) => {

const {state, addBlogPosts, deleteBlogPosts,getBlogPosts} = useContext(Context);

useEffect(() =>{
    getBlogPosts();

    const listener = navigation.addListener('didFocus' , () => {
        getBlogPosts();
    });

    return () => {
        listener.remove();
    };
},[]);

return (
    <View>
        
        
        
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
            return ( 
                <View>
                <TouchableOpacity onPress={() => {navigation.navigate('Show' , {id: item.id});
                                                    console.log(item.id)}}>
                    <View style={styles.row}>
                
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPosts(item.id) }>
                    <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                    
                    </View>
                </TouchableOpacity>
                </View>
                );  
        }}
        
        />
    </View>
);
};


IndexScreen.navigationOptions = ({ navigation}) => {

    return {
            headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather style={styles.plus} name="plus" size={30} />
                </TouchableOpacity>
    };
};

const styles = StyleSheet.create({

    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderWidth: 1,
        borderColor:'gray',
        margin:5
        
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:18
    },
    plus:{
        marginRight: 5
    }
});

export default IndexScreen;