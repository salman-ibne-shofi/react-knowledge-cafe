import { useState } from "react";
import "./App.css";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Blogs from "./Components/Header/Blogs/Blogs";
import Header from "./Components/Header/Header";

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setReadingTime] = useState(0);

	const handleAddToBookmark = (blog) => {
		const newBookmarks = [...bookmarks, blog];
		setBookmarks(newBookmarks);
	};

	const handleMarkAsRead = (id, time) => {
		const newReadingTime = readingTime + time;
		setReadingTime(newReadingTime);
		// remove the read blog from bookmark
		// console.log('remove bookmark', id);
		const remainingBookMarks = bookmarks.filter(
			(bookmark) => bookmark.id !== id
		);
		setBookmarks(remainingBookMarks);
	};

	return (
		<>
			<Header></Header>
			<main className="md:flex max-w-7xl mx-auto">
				<Blogs
					handleAddToBookmark={handleAddToBookmark}
					handleMarkAsRead={handleMarkAsRead}
				></Blogs>
				<Bookmarks
					bookmarks={bookmarks}
					readingTime={readingTime}
				></Bookmarks>
			</main>
		</>
	);
}

export default App;
