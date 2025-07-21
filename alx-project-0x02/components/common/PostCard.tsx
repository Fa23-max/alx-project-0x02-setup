import {type PostProps } from '@/interfaces'
import React from 'react'

const PostCard:React.FC <PostProps>= ({title ,content , userId}) => {
  return (
    <div className="card">
        <div className="container">
        <h4><b>Title</b></h4>
        <p>Architect & Engineer</p>
    </div>
</div>
  )
}

export default PostCard