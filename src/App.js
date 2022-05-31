import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Test text'},
        {id: 2, title: 'Java', body: 'Test java'},
    ]);

    const [filter, setFilter] = useState({sort: '', search: ''});

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            // sort mutates current array. state can not be mutated directly
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.search.toLowerCase())
                || p.body.toLowerCase().includes(filter.search.toLowerCase()));
    }, [filter.search, sortedPosts]);

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} posts={posts} setPosts={setPosts}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Language List"/>
        </div>
  );
}

export default App;
