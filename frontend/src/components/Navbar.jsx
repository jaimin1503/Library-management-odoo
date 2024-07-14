import SearchCompo from "./SearchCompo";
import Sidebar from "./Sidebar";

export default function Navbar() {
  return (
    <div className="py-2 flex justify-between items-center">
      <h1 className=" text-xl sm:text-3xl font-bold mx-5">Page Turners</h1>
      {localStorage.getItem("token") && (
        <div className=" mx-5">
          <SearchCompo />
        </div>
      )}
      <div className=" flex md:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
