import React, { Component } from "react";
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentWillMount() {
        this._loadComments();
    }

    //加载评论列表
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({ comments });
        }
    }

    //保存评论列表数据
    _saveComemnts(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    handleSubmitComment(comment) {
        if (!comment) return;
        if (!comment.username) return alert('please input username!');
        if (!comment.content) return alert('please input content!');
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({ comments: comments });
        this._saveComemnts(comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments: comments });
        this._saveComemnts(comments);
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput
                    onSubmit={this.handleSubmitComment}
                />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment}
                />
            </div>
        )
    }
}
export default CommentApp;

