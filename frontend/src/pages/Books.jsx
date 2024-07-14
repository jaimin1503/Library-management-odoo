import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchCompo from "../components/SearchCompo";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Sidebar2 from "../components/Sidebar2";

export default function Books({ category }) {
  const [books, setBooks] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/book/getBooks`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" flex">
        <Sidebar2 />
        <div className=" flex flex-col w-full">
          <div className=" text-4xl font-medium p-4">Trendings</div>
          <div className="container p-4">
            {books.length > 0 &&
              books.map((book) => (
                <div key={book._id}>
                  <Link to={`/book/${book?.Id}`}>
                    <BookCard book={book} />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
