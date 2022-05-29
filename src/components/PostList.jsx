import React from 'react';
import PostItem from "./PostItem";

const PostList = ({remove, posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {
                posts.length
                ? posts.map((post, index) => <PostItem remove={remove} index={index + 1} post={post} key={post.id}/>)
                : <div style={{textAlign: 'center', marginTop: '20px'}}>List is empty</div>
            }
        </div>
    );
};

export default PostList;
