import { useParams } from "react-router-dom";
import { useState } from "react";
import jobs from "../data/jobs";
import ApplyModal from "../components/ApplyModal";

const JobDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">
        {job.title}
      </h2>

      <p className="text-gray-700 mb-1">
        {job.company}
      </p>

      <p className="text-gray-500 mb-4">
        {job.location} • {job.type} • {job.experience}
      </p>

      <p className="text-gray-600 mb-6">
        This is a sample job description. You can expand this later.
      </p>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Apply Now
      </button>

      <ApplyModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default JobDetails;
