import { useState } from "react";
import video from "../data/video";
import Comments from "./Comments";

const VideoDetails = () => {
    const [isCommentSectionHidden, setIsCommentSectionHidden] = useState(false)

    const hideCommentSection = () => {
        setIsCommentSectionHidden(!isCommentSectionHidden)
    }

    const [votes, setVotes] = useState(video.upvotes)
    const [vote, setVote] = useState(video.downvotes)

    const addUpvotes = () => {
        setVotes(prevVotes => prevVotes + 1)
    }

    const addDownvotes = () => {
        setVote(prevVotes => prevVotes + 1)
    }

    return (
        <div>
            <h2>{ video.title }</h2>
            <p><span>{ video.views } Views</span> | <span>Created { video.createdAt}</span></p>
            <div>
                <button onClick={ addUpvotes }>{ votes }</button>
                <button onClick={ addDownvotes }>{ vote }</button>
            </div>
            <button onClick={hideCommentSection}>{isCommentSectionHidden ? 'Show' : "Hide"} Comments</button>
            <Comments isHidden={isCommentSectionHidden}/>
        </div>
    )
}

export default VideoDetails