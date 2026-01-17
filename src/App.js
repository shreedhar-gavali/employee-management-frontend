import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    jobProfile: "",
    dob: "",
    salary: "",
    contact: "",
    location: "",
    timestamp: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString();

    const finalEmployeeData = {
      ...employee,
      timestamp: currentTime
    };

    console.log("Employee Data:", finalEmployeeData);
  };

  

      return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Employee Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={employee.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="jobProfile"
          placeholder="Job Profile"
          value={employee.jobProfile}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="dob"
          value={employee.dob}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={employee.contact}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={employee.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);

}

export default App;


