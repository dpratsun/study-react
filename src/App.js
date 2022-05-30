import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/Select";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Test text'},
        {id: 2, title: 'Java', body: 'Test java'},
    ]);

    const [selectedSort, setSelectedSort] = useState();

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        // sort mutates current array. state can not be mutated directly
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
        console.log(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost} posts={posts} setPosts={setPosts}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <Select
                    value={selectedSort}
                    onChange={sort => sortPosts(sort)}
                    defaultValue="Sort By"
                    options={[{value: 'title', name: 'Title'}, {value: 'body', name: 'Body'}]}/>
            </div>
            <PostList remove={removePost} posts={posts} title="Language List"/>
        </div>
  );
}

export default App;
