import React from 'react';
import Button from "./ui/button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <strong>{props.index}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post-btn">
                <Button onClick={() => props.remove(props.post)} styleClass="btn-red">
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default PostItem;
