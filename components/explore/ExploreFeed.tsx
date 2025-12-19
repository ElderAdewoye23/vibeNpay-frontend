"use client"
import { posts } from '../../data/data';
import {useExploreStore} from "../../store/useExploreStore"


import React, {  useState } from 'react'
import { UserAvatar} from './UserAvatar';
import { Dot, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'

function ExploreFeed() {

    const {activeTab} = useExploreStore();

    

    const useFilteredPosts = () => {

        if(activeTab === 'all') {
            return Object.values(posts).flat();
        }

        return posts[activeTab] ?? [];
    }

    const filteredPosts = useFilteredPosts();

    const [postState, setPostState] = useState(filteredPosts);
    const [openChatPostId, setOpenChatPostId] = useState<number | null>(null)


    // useEffect(() => {
    //     setPostState(filteredPosts);
    // }, [filteredPosts])

    // Like Addition
    const handleLike = (postId: number) => {
  setPostState((prev) =>
    prev.map((post) => {
      if (post.id !== postId) return post

      const alreadyLiked = post.stats.isLiked

      return {
        ...post,
        stats: {
          ...post.stats,
          isLiked: !alreadyLiked,
          likes: alreadyLiked
            ? post.stats.likes - 1
            : post.stats.likes + 1,
        },
      }
    })
  )
}

  return (
    <div className='pt-10'>
        <div className="space-y-4">
            {postState.map((post) => (
                <div key={post.id} className='border-2 border-gray-200 dark:border-gray-800 p-4 bg-gray-100 rounded-lg space-y-4 dark:bg-gray-800'>
                    <div >
                        <div className='flex gap-2 items-center mb-4'>
                            <UserAvatar image={post.image} username={post.username} />
               <div>
                 <h1>{post.username} </h1>
                 <p className='text-xs text-gray-400'>{post.timeAgo}</p>
               </div>
                        </div>
                        
                    </div>
                    <hr />
                    {/* content */}
                    <div>
                        <p className='p-3'>
                            {post.content}
                        </p>
                        {/* userstats */}
                        <div className='bg-green-100 dark:bg-green-200 text-green-900 p-2 rounded-md mt-2 space-y-1 border-darkbg border'>
                            <p className='flex items-center text-xs font-bold '>
                            <span>
                                {post.userStats.isMonetized && "Monetized"}
                            </span>
                            <span>
                                <Dot size={45} className={`${post.userStats.isMonetized ? 'text-green-500' : 'text-gray-500'}`} />
                            </span>
                        </p>
                        <p className='text-xs'>
                            {post.userStats.earningRate && `Earning Rate: $${post.userStats.earningRate}/1000 views`}
                        </p>
                        <p  className='text-xs'>
                            {post.userStats.followers && `Followers: ${post.userStats.followers}`}
                        </p>
                        </div>
                    </div>
                    <hr className='border-gray-500 dark:border-gray-600' />
                    {/* stats */}
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <p>{post.stats.likes} likes</p>
                        <p>{post.stats.comments} comments</p>
                        <p>{post.stats.shares} shares</p>
                    </div>
                    <hr className='border-gray-500 dark:border-gray-600' />
                    {/* actions */}
                    <div className='flex items-center justify-around text-gray-600 dark:text-gray-400 text-md'>
                        <Button className='hover:text-red-500' onClick={() =>handleLike(post.id)}>
                            <span><Heart className={`h-5 w-5 transition ${
      post.stats.isLiked ? 'fill-red-500' : ''
    }`}  /></span>
                            <span>{post.stats.likes}</span>
                        </Button>
                        {/* Comment / Chat Button */}
              <Dialog open={openChatPostId === post.id} onOpenChange={(open) => setOpenChatPostId(open ? post.id : null)}>
                <DialogTrigger asChild>
                  <Button>
                    <MessageCircle />
                    <span>{post.stats.comments}</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px] w-full'>
                  <DialogHeader>
                    <DialogTitle>Comments</DialogTitle>
                  </DialogHeader>
                  {/* Simple comment input */}
                  <div className='mt-2 flex flex-col gap-2'>
                    <textarea
                      placeholder="Write a comment..."
                      className='border p-2 rounded-md w-full'
                    />
                    <Button className='self-end'>Post Comment</Button>
                  </div>
                </DialogContent>
              </Dialog>
                        <Button className='hover:text-brand dark:hover:text-darkbg'>
                            <span><Share2 /></span>
                            <span>{post.stats.shares}</span>
                        </Button>
                        
                    </div>
                    <div>

                    </div>

                </div>
            ) )}
        </div>

    </div>
  )
}

export default ExploreFeed