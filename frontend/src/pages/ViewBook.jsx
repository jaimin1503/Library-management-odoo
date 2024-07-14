import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VIRE_BASE_URL}/api/book/getBook/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return <div>ViewBook</div>;
}
