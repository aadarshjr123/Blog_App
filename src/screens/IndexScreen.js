import React , {useContext} from 'react';
import { StyleSheet, Text, View ,FlatList,Button } from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = () => {

const {data, addBlogPosts} = useContext(BlogContext);

return (
    <View>
        <Text>indexScreen!</Text>
        <Button title="ADD BLOG POST" onPress={addBlogPosts}/>
        
        <FlatList 
            data={data}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({item}) => {
            return <Text>{item.title}</Text>
        }}
        
        />
    </View>
);
};

const styles = StyleSheet.create({});

export default IndexScreen;