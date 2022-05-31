import React from 'react';
import PostItem from "./PostItem";

const PostList = ({remove, posts, title}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center', marginTop: '20px'}}>
            List is empty
        </h1>
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) => <PostItem remove={remove} index={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;
