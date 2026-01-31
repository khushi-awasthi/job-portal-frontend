import Sidebar from "../components/Sidebar";
import { Bookmark, Send, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-8">
          My Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Saved Jobs */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Bookmark className="text-blue-600" size={28} />
              <div>
                <p className="text-gray-500 text-sm">
                  Saved Jobs
                </p>
                <p className="text-3xl font-bold text-blue-600">
                  3
                </p>
              </div>
            </div>
          </div>

          {/* Applied Jobs */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Send className="text-green-600" size={28} />
              <div>
                <p className="text-gray-500 text-sm">
                  Applied Jobs
                </p>
                <p className="text-3xl font-bold text-green-600">
                  1
                </p>
              </div>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <User className="text-purple-600" size={28} />
              <div>
                <p className="text-gray-500 text-sm">
                  Profile Completion
                </p>
                <p className="text-3xl font-bold text-purple-600">
                  80%
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
