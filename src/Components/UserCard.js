import React from 'react'
import { Card } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
            <span className='profil'>
{user.name[0]}
            </span>
  <Card.Body>
    <Card.Title>
       {user.name} 
    </Card.Title>
    <Card.Text>
      {user.username}
    </Card.Text>
    <Card.Text>
      {user.email}
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard
