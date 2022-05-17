import { Component } from "react";
import Comment from './Comment'
import { PropTypes } from 'prop-types'

class CommentList extends Component {
    constructor() {
        super();
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        return (
            <div className="comment-list">
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment}
                    />
                )}
            </div>
        );
    }
}

export default CommentList;