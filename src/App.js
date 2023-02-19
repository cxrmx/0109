import { AboutMe } from './components/AboutMe'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { useState } from 'react'
import { AddComment } from './components/AddComment'

function App() {
  const addNewComment = (comment) => {
    const date = new Date(Date.now())

    const monthNames = [
      'Jan',
      'Feb',
      'March',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    setComments((prevComments) => [
      ...prevComments,
      {
        name: 'Anonymous user',
        date: `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`,
        comment: comment,
      },
    ])
  }

  const [comments, setComments] = useState([
    {
      name: 'Samuel Jackson',
      date: '13 Apr 2022',
      comment: "Hey Eva! You're cool. Nice pic!",
    },
    {
      name: 'Angela Deimon',
      date: '10 Apr 2022',
      comment:
        'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
    },
    {
      name: 'Ronald Harris',
      date: '8 Apr 2022',
      comment:
        'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
    },
  ])

  return (
    <div className="App min-w-[360px] max-w-[720px] mx-auto text-custom-black p-[20px] pb-0">
      <AboutMe />
      <Services />
      <Reviews comments={comments} />
      <AddComment addNewComment={addNewComment} />
    </div>
  )
}

export default App
