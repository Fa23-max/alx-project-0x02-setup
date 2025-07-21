import Card from '@/components/common/Card'
import React from 'react'

const home = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Card title="Nairobi" content="The heart of Kenya"/>
        <Card title="Thika" content="pinapples"/>
        <Card title="Nakuru" content="Many Rats"/>
    </div>
  )
}

export default home