import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-600">
        {job.title}
      </h3>

      <p className="text-gray-700">{job.company}</p>

      <div className="text-sm text-gray-500 mt-2">
        <span>{job.location}</span> •{" "}
        <span>{job.type}</span> •{" "}
        <span>{job.experience}</span>
      </div>

      <Link
        to={`/job/${job.id}`}
        className="mt-4 inline-block text-sm text-blue-600 font-medium hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
