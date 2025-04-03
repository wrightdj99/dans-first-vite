import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [imageLink, setImageLink] = useState("")

  const handleImageChange = (count) => {
    if (count == 0) {
      setImageLink("https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=790b7611c8eryh2jj971ixyob1swyda8h93mfsw1p7zqmltx&ep=v1_gifs_search&rid=giphy.gif&ct=g");
    } else if (count == 1) {
      setImageLink("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhlcnloMmpqOTcxaXh5b2Ixc3d5ZGE4aDkzbWZzdzFwN3pxbWx0eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mcsPU3SkKrYDdW3aAU/giphy.gif");
    } else if (count == 2) {
      setImageLink("https://media.giphy.com/media/3o7TKOf5uCMX5rGdX2/giphy.gif?cid=790b7611c8eryh2jj971ixyob1swyda8h93mfsw1p7zqmltx&ep=v1_gifs_search&rid=giphy.gif&ct=g");
    } else {
      setImageLink("https://media.giphy.com/media/5r5J4JD9miis/giphy.gif?cid=790b7611c8eryh2jj971ixyob1swyda8h93mfsw1p7zqmltx&ep=v1_gifs_search&rid=giphy.gif&ct=g");
    }
  }

  useEffect(() => {
    handleImageChange(count);
  }, []);

  return (
    <div className='container'>
      <div className='card-header'>
        <h1>Welcome to Dan Wright's first ever deployed site!</h1>
      </div>
      <div className='card-body'>
        <img src={imageLink}/>
        <br/>
        <button onClick={() => {setCount(Math.floor(Math.random() * 4)); handleImageChange(count)}}>
          Click To Change Image
        </button>
      </div>
    </div>
  )
}

export default App
