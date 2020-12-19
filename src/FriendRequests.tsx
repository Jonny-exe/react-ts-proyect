import React from 'react'
import FriendRequest from './FriendRequest'
import { GetFriendRequests } from './requests.jsx'

const FriendRequests = (props: any) => {
  const { requests } = GetFriendRequests(props.valueUser)
  console.log("FriendRequests: data: ", requests, props.valueUser)

  return (
    <div style={{textAlign: "center"}}>
      <h2> Friend requests </h2>
      {requests == null ? "Loading" : requests.length === 0 ? "No requests" : requests.map((r: any) => (
        <div> <FriendRequest friendsAcceptedCount={props.friendsAcceptedcount}  increaseFriendsAcceptedCount={props.increaseFriendsAcceptedCount} valueUser={props.valueUser} name={r.name} date={r.date} /> </div>))}
    </div>
  )
}

export default FriendRequests
