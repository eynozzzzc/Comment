import React, { Component } from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    handleSubmitComment = (comment) => {
        if (!comment) return;
        if (!comment.username) return alert('please input username!');
        if (!comment.content) return alert('please input content!');
        this.state.comments.push(comment);
        this.setState({ comments: this.state.comments })
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <CommentList
                    comments={this.state.comments}
                />
            </div>
        )
    }
}
export default CommentApp;

