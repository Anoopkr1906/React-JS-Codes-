import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

// we used $id since we need it as that's ow appwrite works

//Note: Each post has a unique id which is it's slug!!! We passed the slug of each post as it's unique id (in the database) while creating the post. Hence we need to use this to form a link. Therefore, use $id to get the unique id of the post.
function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFileView(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard