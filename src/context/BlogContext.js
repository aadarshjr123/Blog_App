import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//Created An Context.
// const BlogContext = React.createContext();

const blogReducer = (state, action) => {

    switch (action.type) {

        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogpost) => {
                return blogpost.id === action.payload.id
                ? action.payload
                : blogpost;
            });
        case 'delete_blogpost':
            return state.filter(blogpost => blogpost.id !== action.payload);
        // case 'add_blogpost':
        //     return [...state, { 
        //         id: Math.floor(Math.random() * 99999),
        //         title: action.payload.title,
        //         content: action.payload.content,
                 
        //     }
        // ];
        default:
            return state;
    }

};


const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type:'get_blogposts' , payload: response.data});
    };
};

const addBlogPosts = dispatch => {
    return async ( title, content, callback) => {
        await jsonServer.post('/blogposts' ,{title,content});
    // dispatch({ type : 'add_blogpost' , payload: {title, content}});
    if (callback) {
    callback();
    }
        
  };
};

const deleteBlogPosts = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
       dispatch({ type: 'delete_blogpost' ,payload: id });
    };
};

const editBlogPosts = dispatch => {
    return async (id, title , content ,callback) => {
        await jsonServer.put(`/blogposts/${id}` , {title,content});
        
        dispatch({ type: 'edit_blogpost' , payload: {id, title, content}});
        if(callback){
        callback();
        } 
    };
};





export const { Context , Provider} = createDataContext(blogReducer , { addBlogPosts, deleteBlogPosts , editBlogPosts, getBlogPosts}, []);