import React,{useState} from 'react';
import {View, Text,StyleSheet, TextInput,TouchableOpacity,Button,Image} from 'react-native';

const BlogPostForms = ({ onSubmit , initialValues}) => {
    
    const [title,setTitle] = useState(initialValues.title);
    const [content,setContent] = useState(initialValues.content);

    

    return(
        <View>
            <Text style = {styles.center}>CreateScreen</Text>
            <Text style = {styles.center}>Title</Text>
            <TextInput style = {styles.titleStyle} value={title} onChangeText={text => setTitle(text)}/>
            <Text style = {styles.center}>Content</Text>
            <TextInput style = {styles.titleStyle} value={content} onChangeText={text => setContent(text)}/>
            
            <TouchableOpacity style = {styles.button}>
                <Button 
                    title="Add this" 
                    onPress={() =>  {onSubmit( title , content )}}
                />
                                                            
            </TouchableOpacity>
        </View>
       
    );
};

BlogPostForms.defaultProps ={
    initialValues: {
        title:'',
        content:''
    }
};

const styles = StyleSheet.create({

    center:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        paddingTop:20
        
        
    },
    titleStyle:{
        // paddingTop:10,
        // borderWidth:1,
        // borderColor:"black",
        borderRadius:10,
        // margin:5,
        // marginHorizontal:10,
        // fontSize:18,
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom: 15,
        padding:5,
        margin:5
        
    },
    button:{
        
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'darkblue',        
        padding:5,
        margin:10,
        borderRadius:10,

    }
});


export default BlogPostForms;