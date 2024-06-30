import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Header/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {
   const [bookmarks, setBookmarks] = useState([]);

    const handleAddToBookmark = blog =>{
        console.log('bookmark adding soon');
    }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
