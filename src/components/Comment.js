import React from 'react';

import './Comment.css';

function Comments({comment}) {
  const {author, content} = comment;
  return (
    <div className="comment">
      <img src={author.avatar} alt={author.name}/>
      <p><strong>{author.name}</strong> {content}</p>
    </div>
  );
}

export default Comments;