import { useEffect, useState } from 'react'

export const AddComment = ({ addNewComment }) => {
  const [comment, setComment] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (comment.length === 0) {
      alert('Please fill the input!')
    } else {
      addNewComment(comment)

      setComment('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' && event.ctrlKey) {
        event.preventDefault()
        if (comment.length === 0) {
          alert('Please fill the input!')
        } else {
          addNewComment(comment)
          setComment('')
        }
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#F2F2F2] px-[20px] py-[30px] w-[100%] flex flex-col justify-center items-center"
    >
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        className="h-[60px] border border-black rounded-[1px] w-[100%] mb-[25px] p-[10px]"
        onKeyDown={handleKeyDown}
      />
      <button
        className="px-[10px] py-[15px] bg-[#FDD639] rounded-[23px] font-bold min-w-fit w-[50%] whitespace-nowrap"
        type="submit"
      >
        Send a message
      </button>
    </form>
  )
}
