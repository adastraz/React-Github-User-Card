import React from 'react'

const UserCard = props => {
    return (
        <div className='member'>
            <img src={props.users.avatar_url} />
            <h1>{props.users.login}</h1>
        </div>
    )
}

export default UserCard