import { useState } from "react";
import jobsData from "../data/jobs";
import JobCard from "../components/Jobcard";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (jobType === "" || job.type === jobType)
    );
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Latest Jobs
      </h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No jobs found
        </p>
      )}
    </div>
  );
};

export default Home;
