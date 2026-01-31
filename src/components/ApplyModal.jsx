const ApplyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Apply for Job
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded w-full mb-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-2 rounded w-full mb-3"
        />

        <input
          type="file"
          className="border p-2 rounded w-full mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
