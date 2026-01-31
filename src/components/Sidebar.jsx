const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        JobPortal
      </h1>

      <ul className="space-y-4 list-none p-0
">
        <li className="bg-blue-100 text-blue-600 px-4 py-2 rounded font-medium cursor-pointer">
          Dashboard
        </li>
        <li className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
          Saved Jobs
        </li>
        <li className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
          Applied Jobs
        </li>
        <li className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
