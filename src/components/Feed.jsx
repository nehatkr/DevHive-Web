import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { addFeed } from '../utils/feedSlice';
import UserCard from './userCard';


const Feed = () => {
  const feed = useSelector((store)=>store.feed)  //get the feed store from the store
  const dispatch = useDispatch();
 

  const getFeed = async()=> {
    if(feed) return;  //if feed available then just return dont make api call again for feed
  try{

      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res?.data?.data))   //dispatch the feed store data
    
    }catch(err){
    console.log(err.massage);
  }
  };

useEffect(()=>{
  getFeed();
},[])

if(!feed) return;
if(feed.length <= 0) return <h1 className='flex justify-center my-10'>No more User founds!</h1>

  return( feed && (
    <div className='flex justify-center my-10'>
      <UserCard user={feed[0]}/>
    </div>
  ))
}

export default Feed
