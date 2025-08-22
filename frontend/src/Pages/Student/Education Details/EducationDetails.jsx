import React, { useState, useEffect } from "react";
import {
  fetchStudentEducation,
  updateEducationDetails,
  addEducationDetails,
} from "../../../api/Student/Student.api";

// Degree Options (fixed)
const degreeOptions = [
  { label: "High School", value: 1 },
  { label: "Intermediate", value: 2 },
  { label: "Bachelor's", value: 3 },
  { label: "Master's", value: 4 },
  { label: "Diploma", value: 5 },
];

export default function EducationDetails() {
  const [education, setEducation] = useState([]);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For adding new degree
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDegreeData, setNewDegreeData] = useState({
    degree_id: 1,
    school: "",
    field: "",
    year: "",
    percentage: "",
  });

  useEffect(() => {
    const getEducationDetails = async () => {
      try {
        const data = await fetchStudentEducation();
        setEducation(data.item);
      } catch (err) {
        setError("Failed to fetch education details.");
      } finally {
        setLoading(false);
      }
    };

    getEducationDetails();
  }, []);

  const handleEditClick = (edu) => {
    setEditing(edu.education_id);
    setFormData({
      school: edu.school || "",
      field: edu.field || "",
      year: edu.year || "",
      percentage: edu.percentage || "",
    });
  };

  const handleSaveClick = async (edu) => {
    try {
      await updateEducationDetails(edu.education_id, formData);

      setEducation((prev) =>
        prev.map((item) =>
          item.education_id === edu.education_id
            ? { ...item, ...formData }
            : item
        )
      );
      setEditing(null);
    } catch (err) {
      console.error("Failed to save education details:", err);
      setError("Failed to save education details.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewDegreeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDegree = async () => {
    try {
      const added = await addEducationDetails(newDegreeData);
      setEducation((prev) => [...prev, added.item]);
      setNewDegreeData({
        degree_id: 1,
        school: "",
        field: "",
        year: "",
        percentage: "",
      });
      setShowAddForm(false);
    } catch (err) {
      console.error("Failed to add education:", err);
      setError("Failed to add education.");
    }
  };

  // Get label based on degree_id
  const getSchoolLabel = (degreeId) =>
    degreeId === 1 || degreeId === 2 ? "School Name" : "Institute Name";

  const getDegreeLabel = (degreeId) => {
    const found = degreeOptions.find((deg) => deg.value === parseInt(degreeId));
    return found ? found.label : "Degree";
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-600">
          Education Details
        </h2>

        {/* Existing degrees */}
        {education.map((edu) => (
          <div
            key={edu.education_id}
            className="bg-lime-400/50 shadow rounded-lg p-6 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {getDegreeLabel(edu.degree_id)}
              </h3>
              {editing === edu.education_id ? (
                <button
                  onClick={() => handleSaveClick(edu)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(edu)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              )}
            </div>

            <div className="space-y-2 mt-4">
              {/* School/Institute */}
              <div className="text-sm">
                <span className="font-medium text-gray-600">
                  {getSchoolLabel(edu.degree_id)}:
                </span>{" "}
                {editing === edu.education_id ? (
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="ml-2 p-1 border rounded"
                  />
                ) : (
                  <span className="text-gray-800">{edu.school}</span>
                )}
              </div>

              {/* Field */}
              <div className="text-sm">
                <span className="font-medium text-gray-600">Field:</span>{" "}
                {editing === edu.education_id ? (
                  <input
                    type="text"
                    name="field"
                    value={formData.field}
                    onChange={handleInputChange}
                    className="ml-2 p-1 border rounded"
                  />
                ) : (
                  <span className="text-gray-800">{edu.field}</span>
                )}
              </div>

              {/* Year */}
              <div className="text-sm">
                <span className="font-medium text-gray-600">Year:</span>{" "}
                {editing === edu.education_id ? (
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="ml-2 p-1 border rounded"
                  />
                ) : (
                  <span className="text-gray-800">{edu.year}</span>
                )}
              </div>

              {/* Percentage */}
              <div className="text-sm">
                <span className="font-medium text-gray-600">Percentage:</span>{" "}
                {editing === edu.education_id ? (
                  <input
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    className="ml-2 p-1 border rounded"
                  />
                ) : (
                  <span className="text-gray-800">{edu.percentage}</span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Add New Degree Button */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Add New Degree
          </button>
        )}

        {/* Add New Degree Form */}
        {showAddForm && (
          <div className="bg-gray-100 shadow rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Add New Degree
            </h3>

            {/* Degree Dropdown */}
            <div className="mb-2">
              <label className="font-medium text-gray-600">Degree:</label>
              <select
                name="degree_id"
                value={newDegreeData.degree_id}
                onChange={handleAddInputChange}
                className="ml-2 p-1 border rounded"
              >
                {degreeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* School/Institute */}
            <div className="mb-2">
              <label className="font-medium text-gray-600">
                {getSchoolLabel(parseInt(newDegreeData.degree_id))}:
              </label>
              <input
                type="text"
                name="school"
                value={newDegreeData.school}
                onChange={handleAddInputChange}
                className="ml-2 p-1 border rounded"
              />
            </div>

            {/* Field */}
            <div className="mb-2">
              <label className="font-medium text-gray-600">Field:</label>
              <input
                type="text"
                name="field"
                value={newDegreeData.field}
                onChange={handleAddInputChange}
                className="ml-2 p-1 border rounded"
              />
            </div>

            {/* Year */}
            <div className="mb-2">
              <label className="font-medium text-gray-600">Year:</label>
              <input
                type="number"
                name="year"
                value={newDegreeData.year}
                onChange={handleAddInputChange}
                className="ml-2 p-1 border rounded"
              />
            </div>

            {/* Percentage */}
            <div className="mb-2">
              <label className="font-medium text-gray-600">Percentage:</label>
              <input
                type="number"
                name="percentage"
                value={newDegreeData.percentage}
                onChange={handleAddInputChange}
                className="ml-2 p-1 border rounded"
              />
            </div>

            <div className="flex space-x-2 mt-4">
              <button
                onClick={handleAddDegree}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



