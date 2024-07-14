import { Search, Close } from "@mui/icons-material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonItem, IonSpinner } from "@ionic/react";
import BookCard from "./BookCard";

const SearchCompo = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all users once when the component mounts
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/book/getAllBooks`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooks(res.data.allbooks);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); // This runs only once on component mount

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter users locally instead of making an API call on each change
    const filteredBooks = books.filter(
      (book) =>
        value && book.title.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredBooks);
  };

  return (
    <>
      <div className=" flex flex-col">
        <input
          type="text"
          className="rounded-lg p-2 outline-none absolute pl-10 bg-pure-greys-25 my-2 w-full"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to Search..."
        />
        <div className="flex justify-between">
          <div className="relative p-2 cursor-pointer w-[25px] h-[25px] my-2">
            <Search />
          </div>
          {!loading && (
            <div
              onClick={() => setInputValue("")}
              className="relative p-2 cursor-pointer float-right text-gray-500 my-2"
            >
              <Close />
            </div>
          )}
          {loading && (
            <div className="p-2">
              <IonItem>
                <IonSpinner name="lines-sharp-small"></IonSpinner>
              </IonItem>
            </div>
          )}
        </div>
      </div>
      <ul className="mt-2 mx-5">
        {suggestions.map((book) => (
          <Link to={`/book/${book._id}`}>
            <BookCard book={book} />
          </Link>
        ))}
      </ul>
    </>
  );
};
export default SearchCompo;
