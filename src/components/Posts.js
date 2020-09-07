import React from 'react'
import {connect} from 'react-redux'
import Post from "./Post";

const Posts =  ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post.id}/>)
};

const mapStatetoProps = state => {
    return {
        syncPosts: state.posts.posts
    }
};

export default connect(mapStatetoProps, null)(Posts)