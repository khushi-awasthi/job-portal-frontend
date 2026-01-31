const FilterBar = ({
  search,
  setSearch,
  location,
  setLocation,
  jobType,
  setJobType,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4">
      
      <input
        type="text"
        placeholder="Search job role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <select
        value={jobType}
        onChange={(e) => setJobType(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="">Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Internship">Internship</option>
      </select>

    </div>
  );
};

export default FilterBar;
