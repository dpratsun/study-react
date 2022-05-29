import React, {useState} from 'react';
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addPost = (e) => {
        e.preventDefault();
        create({...post, id: Date.now()});
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <Input
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Post Title"/>
            <Input
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                name="body"
                type="text"
                placeholder="Post text"/>
            <Button onClick={e => addPost(e)} styleClass="btn">Add</Button>
        </form>
    );
};

export default PostForm;
