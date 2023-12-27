import React from "react";
import video from "../data/video";

const Comments = ({ isHidden }) => {
    

    return (
        <div>
            <h4>{video.comments.length} Comments</h4>
            {!isHidden && (
                <div>
                    {video.comments.map((comment, i) => (
                        <div key={i}>
                            <h5>{comment.user}</h5>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comments