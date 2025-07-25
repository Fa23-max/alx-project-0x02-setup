import PostCard from '@/components/common/PostCard'
import Header from '@/components/layout/Header'
import { getStaticProps } from 'next/dist/build/templates/pages'
import React, { useState } from 'react'

const posts = () => {
    const [posts ,setPosts] = useState({})
    
  return (
    <div>
    <Header/>
    <PostCard title='' content='' userId={1}/>

        <h1>posts</h1>
    </div>
  )
}

export default posts
// ["getStaticProps", "async", "await", "fetch"]