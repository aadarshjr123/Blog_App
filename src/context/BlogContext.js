import createDataContext from './createDataContext';


//Created An Context.
// const BlogContext = React.createContext();

const blogReducer = (state, action) => {

    switch (action.type) {
        case 'add_blogpost':
            return [...state, {title:`Blog Post #${state.length + 1}`}];
        case 'remove_blogpost':
            return [...state, {title:`Blog Post #${state.length - 1}`}];
    
        default:
            return state;
    }

};

const addBlogPosts = dispatch => {
    return () => {
    dispatch({ type : 'add_blogpost'});

  };
};





export const { Context , Provider} = createDataContext(blogReducer , { addBlogPosts }, []);