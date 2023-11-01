import './Post.css'
import likePost from '../Resources/likePost.png'
import sharePost from '../Resources/sharePost.png'
import commentPost from '../Resources/commentPost.png'

function Post () {
  return (
    <div className='mainContainer'>
        <div className='titlePost'>
          <div className='titleIcon'>

          </div>
          <div className='titleAccountName'>
            pubity
          </div>
        </div>
        <div className='imagePost'>

        </div>
        <div className='imageInfo'>
          <div className='likeCommentShare'>
            <div className='like'>
              <img 
                src={likePost} 
                alt=''
                height={23}
                width={26} 
              />
            </div>
            <div className='comment'>
              <img 
                src={commentPost} 
                alt=''
                height={23}
                width={26} 
              />
            </div>
            <div className='share'>
              <img 
                src={sharePost} 
                alt=''
                height={23}
                width={26} 
              />
            </div>
          </div>
          <div className='commentsSection'>
            <div className='caption'>
              <p id='accountName'>pubity</p> A religious volume from the early 1300s includes an image of a monk who resembles the Jedi Master Yoda of the Star Wars...
            </div>
          </div>
        </div>
    </div>
  )
}

export default Post;