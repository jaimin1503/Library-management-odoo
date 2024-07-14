export default function BookCard({ book }) {
  return (
    <div className="mx-auto bg-white shadow-lg my-1 rounded-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="">
          <img
            className="rounded-lg mx-4 mt-4 w-32"
            src={
              book?.Thumbnail ||
              "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            }
            alt={book?.Title}
          />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-xl font-semibold mb-2">
            {book?.Title || "jkdaflak ksd "}
          </h1>

          <div className="text-sm text-gray-700">{book?.Author}</div>
          <p className=" text-sm text-pure-greys-500">
            Only {book.Remain} books left
          </p>
        </div>
        <div>
          <button className="py-2 px-4 bg-pure-greys-100 rounded-xl ">
            issue
          </button>
        </div>
      </div>
    </div>
  );
}
