import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
.followerCard{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
}
.followerCard img{
    margin:2%;
}
.followerCard p{
    font-size:2rem;
}
.followers{
    border: 3px solid blue;
    background-color:lightgray;
    margin:3%;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:20%;
}
.followerCard a{
    text-decoration:none;
    font-size:1.5rem;
    margin:5%
}

`

const Usercard = ({ user, followers }) => {
    return (
        <StyledDiv className='usercard'>
            <h1>{user.name}</h1>
            <img width='200px' src={user.avatar_url} alt={user.avatar_url} />
            <div className='bio'>
                <p>Location: {user.location}</p>
                <p>Bio: {user.bio}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
            <div className='followerCard'>
                {
                    followers.map((user) => {
                        return (
                            <div key={user.id} className='followers'>
                                <p>{user.login}</p>
                                <img width='200px' src={user.avatar_url} alt={user.avatar_url} />
                                <a href={user.html_url}>{user.html_url}</a>
                            </div>
                        )
                    })
                }
            </div>
        </StyledDiv>
    )
}

export default Usercard