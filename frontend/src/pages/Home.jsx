import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import collection from "./assets/collection.jpg";
import management from "./assets/management.jpg";
import community from "./assets/community.jpg";

export default function Home() {
  return (
    <div>
      <nav>
        <h1 className=" font-bold text-3xl m-4">Page Turners</h1>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <main className="container mx-auto flex flex-col items-center">
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Library</h2>
            <p className="text-lg mb-8">
              Manage your library efficiently with our powerful system. Track
              books, manage users, and keep everything organized.
            </p>
            <Link
              to="/login"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Get Started
            </Link>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img
                src={collection}
                alt="Library"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Extensive Collection</h3>
                <p>
                  Explore a wide range of books from various genres and authors.
                  Our collection is always growing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded shadow-md overflow-hidden">
              <img
                src={management}
                alt="Management"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Efficient Management</h3>
                <p>
                  Our system ensures smooth management of library operations,
                  making it easy to track and organize books.
                </p>
              </div>
            </div>

            <div className="bg-white rounded shadow-md overflow-hidden">
              <img
                src={community}
                alt="Community"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                <p>
                  Engage with the community through events, book clubs, and
                  more. Build a vibrant community around your library.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="mb-8">
              We provide a user-friendly and efficient library management system
              that caters to all your needs.
            </p>
            <Link
              to="/login"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Get Started
            </Link>
          </section>
        </main>

        <footer className="w-full bg-blue-600 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Library Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
