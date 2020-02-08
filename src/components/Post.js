import React from 'react';

import Comment from './Comment';

import './Post.css';

function Post({post}) {
  const { author, date, content, comments } = post;
  
  return(
    <div className="post">
      <div className="header-post">
        <img src={author.avatar} alt={`Avatar ${author.avatar}`}/>

        <div className="info">
          <h2>{author.name}</h2>
          <span>{date}</span>
        </div>
      </div>

      <div className="content">
        <p>{content}</p>
      </div>

      <div className="divisory"></div>

      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
}

export default Post;