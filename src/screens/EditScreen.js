import React, { useContext } from 'react';
import {StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForms from '../components/BlogPostForms';
import { NavigationProvider } from 'react-navigation';

const EditScreen = ({navigation}) => {
    const {state , editBlogPosts} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    
    const {addBlogPosts} = useContext(Context);


    return <BlogPostForms 
        initialValues={{title:blogPost.title, content:blogPost.content}}
        onSubmit={(title,content)=> {
                     editBlogPosts(id, title,content , () => navigation.pop());
        }}/>;
};


const styles = StyleSheet.create({}); 


export default EditScreen;