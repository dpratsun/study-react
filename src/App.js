import React, {useEffect, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/ui/modal/Modal";
import Button from "./components/ui/button/Button";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', search: ''});
    const [modalVisible, setModalVisible] = useState(false);

    const filteredAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

    // hook triggered on Mount
    useEffect(() => {
        fetchPosts();
    }, [])

    const createPost = (post) => {
        setPosts([...posts, post]);
        setModalVisible(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    }

    return (
        <div className="App">
            <Button style={{marginTop: 30}} onClick={() => setModalVisible(true)}>
                Create Post
            </Button>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost} posts={posts} setPosts={setPosts}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={filteredAndSearchedPosts} title="Posts List"/>
        </div>
  );
}

export default App;
