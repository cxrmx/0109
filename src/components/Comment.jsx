import '../styles/Comment.css'

export const Comment = ({ comment }) => {
  return (
    <div className="comment mb-[20px] text-[14px]">
      <div className="header flex items-baseline">
        <div className="name font-bold leading-[19px] mr-[9px]">
          {comment.name}
        </div>
        <div className="date text-[11px] leading-[19px] text-custom-gray">
          {comment.date}
        </div>
      </div>
      <div className="message mt-[10px] border border-[#C4CBCF] bg-[#F2FBFF]">
        <div className="text">{comment.comment}</div>
      </div>
    </div>
  )
}
