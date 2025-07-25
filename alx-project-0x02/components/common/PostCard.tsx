import {type PostProps } from '@/interfaces'
import React from 'react'

const PostCard:React.FC <PostProps>= ({title ,content , userId}) => {
  return (
    <div className="card">
        <div className="container">
        <b>{title}</b>
        <p>{content}</p>
    </div>
</div>
  )
}

export default PostCard