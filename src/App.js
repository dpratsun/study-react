import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Test text'},
        {id: 2, title: 'Java', body: 'Test java'},
    ]);

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} posts={posts} setPosts={setPosts}/>
            <PostList remove={removePost} posts={posts} title="Language List"/>
        </div>
  );
}

export default App;
