import react from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment.png'
import pen from '../../assests/pen.png'
import black from '../../assests/black.png'

const Widget = () => {
    return(
        <div className='Widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
            <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
            <p>Podcast 374: How valuable is your screen name?</p>
        </div>
    </div>
    <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18'/>
            <p>Review queue Workflows-Final release.....</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18'/>
            <p>Please Welcome valued Associates:#958-V2Blast#959-SencerG</p>
        </div>
        <div className='right-sidebar-div-2'>
            <img src={black} alt="black" width='35'/>
            <p>Outdated Answers:accepted answer is now unpinned on stack Overflow</p>
        </div>
    </div>
    <h4>Hot meta posts</h4>
            <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
            <p>Why was this spam flag declined,yet the question marked as spam?</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>20</p>
            <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className='right-sidebar-div-2'>
            <p>14</p>
            <p>Is a link the "How to ask" help page a useful comment?</p>
        </div>
    </div>
</div>
    )
}

export default Widget