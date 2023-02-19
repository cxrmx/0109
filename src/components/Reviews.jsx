import { Comment } from "./Comment"

export const Reviews = ({ comments }) => {
  return (
    <div className="reviews">
      <div className="reviews-title flex justify-between">
        <div className="flex leading-[16px]">
          <div className="font-bold mr-[8px]">Latest reviews</div>
          <a className="text-[#005DA1] underline text-[14px]" href="#">All reviews</a>
        </div>
        <div className="additional-info text-[12px] flex">
          <div className="likes mr-[16px] cursor-pointer">
            <img src="images/like.svg" className="inline mr-[2px]" alt="like" />
            131
          </div>
          <div className="comments cursor-pointer">
            <img src="images/comment.svg" className="inline mr-[2px]" alt="comment" />
            14
          </div>
        </div>
      </div>
      <div className="comments">
        {comments.map((comment) => <Comment comment={comment} key={comment.comment} />)}
      </div>
    </div>
  )
}
