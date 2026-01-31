import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        JobPortal
      </h1>

      <div className="space-x-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600"
        >
          Jobs
        </Link>

        <Link
          to="/dashboard"
          className="text-gray-600 hover:text-blue-600"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
