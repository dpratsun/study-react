import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Test text'},
        {id: 2, title: 'Java', body: 'Test java'},
    ]);

    return (
    <div className="App">
        <PostList posts={posts} title="Language List"/>
    </div>
  );
}

export default App;
