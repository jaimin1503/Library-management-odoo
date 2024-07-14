import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchCompo from "../components/SearchCompo";

export default function Books({ category }) {
  const [books, setBooks] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/book/getBooks`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="">
        <SearchCompo />
      </div>
      <div className="component">{category}</div>
      <div className="container p-4">
        {books.length &&
          books.map((book) => (
            <div key={book._id}>
              <Link to={`book/${book._id}`} className=" cursor-pointer">
                <BookCard book={book} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
