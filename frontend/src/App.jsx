import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./pages/Books";
import ViewBook from "./pages/ViewBook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

// function Layout() {
//   const { user } = useSelector((state) => state.auth);

//   const location = useLocation();

//   return user ? (
//     <div className="w-full h-screen flex flex-col md:flex-row">
//       <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
//         <Sidebar />
//       </div>

//       <MobileSidebar />

//       <div className="flex-1 overflow-y-auto">
//         <Navbar />

//         <div className="p-4 2xl:px-10">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ) : (
//     <Navigate to="/log-in" state={{ from: location }} replace />
//   );
// }

// const MobileSidebar = () => {
//   const { isSidebarOpen } = useSelector((state) => state.auth);
//   const mobileMenuRef = useRef(null);
//   const dispatch = useDispatch();

//   const closeSidebar = () => {
//     dispatch(setOpenSidebar(false));
//   };

//   return (
//     <>
//       <Transition
//         show={isSidebarOpen}
//         as={Fragment}
//         enter="transition-opacity duration-700"
//         enterFrom="opacity-x-10"
//         enterTo="opacity-x-100"
//         leave="transition-opacity duration-700"
//         leaveFrom="opacity-x-100"
//         leaveTo="opacity-x-0"
//       >
//         {(ref) => (
//           <div
//             ref={(node) => (mobileMenuRef.current = node)}
//             className={clsx(
//               "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
//               isSidebarOpen ? "translate-x-0" : "translate-x-full"
//             )}
//             onClick={() => closeSidebar()}
//           >
//             <div className="bg-white w-3/4 h-full">
//               <div className="w-full flex justify-end px-5 mt-5">
//                 <button
//                   onClick={() => closeSidebar()}
//                   className="flex justify-end items-end"
//                 >
//                   <IoClose size={25} />
//                 </button>
//               </div>

//               <div className="-mt-10">
//                 <Sidebar />
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </>
//   );
// };

function App() {
  return (
    <div className="w-screen min-h-screen">
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<ViewBook />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
