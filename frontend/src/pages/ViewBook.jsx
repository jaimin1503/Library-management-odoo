import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/book/getBook/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 mt-4">
        Error: {error.message}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.BookName}</h1>
      <div className="flex flex-col md:flex-row mb-4">
        <img
          className="w-48 h-auto mb-4 md:mb-0 md:mr-4"
          src={book.Thumbnail}
          alt={book.Title}
        />
        <div>
          <p className="mb-2">
            <strong>Title:</strong> {book.Title}
          </p>
          <p className="mb-2">
            <strong>Author:</strong> {book.Author}
          </p>
          <p className="mb-2">
            <strong>Publisher:</strong> {book.Publisher}
          </p>
          <p className="mb-2">
            <strong>Year:</strong> {book.Year}
          </p>
          <p className="mb-2">
            <strong>Genre:</strong> {book.Genre}
          </p>
          <p className="mb-2">
            <strong>Quantity:</strong> {book.Quantity}
          </p>
          <p className="mb-2">
            <strong>ISBN:</strong> {book.ISBN}
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {book.Description}
          </p>
        </div>
      </div>
      {/* {book.BorrowedBy && book.BorrowedBy.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Borrowed By:</h2>
          <ul className="list-disc pl-5">
            {book.BorrowedBy.map((userId) => (
              <li key={userId} className="mb-1">
                {userId}
              </li> // Assuming you want to show user IDs; you can modify this to fetch and show user details if needed
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
