import React, { useState, useEffect } from "react";
import { fetchStudentEducation } from "../../../api/Student/Student.api"; 
import SampleEducation from "../../../SampleData/EducationDetails";

export default function EducationDetails() {
  const [education, setEducation] = useState(SampleEducation);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState({});
  const [newDegree, setNewDegree] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEducationDetails = async () => {
      try {
        const data = await fetchStudentEducation();
        setEducation(data);
      } catch (err) {
        setError("Failed to fetch education details.");
      } finally {
        setLoading(false);
      }
    };

    getEducationDetails();
  }, []);

  const handleEditClick = (key) => {
    setEditing(key);
    setFormData(education[key]);
  };

  const handleSaveClick = (key) => {
    setEducation({
      ...education,
      [key]: formData,
    });
    setEditing(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddNewDegree = () => {
    setNewDegree(true);
    setFormData({
      title: "",
      year: "",
      school: "",
      cgpa: "",
      percentage: "",
    });
  };

  const handleSaveNewDegree = () => {
    const newKey = formData.title.toLowerCase().replace(/ /g, "");
    setEducation({
      ...education,
      [newKey]: formData,
    });
    setNewDegree(false);
  };

  const EducationCard = ({ title, details, isEditing, onEditClick, onSaveClick }) => (
    <div className="bg-gray-100 shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {isEditing ? (
          <button
            onClick={onSaveClick}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={onEditClick}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}
      </div>
      <div className="space-y-2">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="text-sm">
            <span className="font-medium text-gray-600">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>{" "}
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={formData[key] || ""}
                onChange={handleInputChange}
                className="ml-2 p-1 border rounded"
              />
            ) : (
              <span className="text-gray-800">{value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-50">Education Details</h2>
        {Object.entries(education).map(([key, details]) => {
          const title = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());
          return (
            <EducationCard
              key={key}
              title={title}
              details={details}
              isEditing={editing === key}
              onEditClick={() => handleEditClick(key)}
              onSaveClick={() => handleSaveClick(key)}
            />
          );
        })}

        {/* Add Degree Button */}
        {!newDegree && (
          <button
            onClick={handleAddNewDegree}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Add Degree
          </button>
        )}

        {/* New Degree Form */}
        {newDegree && (
          <div className="bg-gray-100 shadow rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Degree</h3>
            <div className="space-y-2">
              <input
                type="text"
                name="title"
                placeholder="Degree Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="school"
                placeholder="School/Institute"
                value={formData.school}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="cgpa"
                placeholder="CGPA (if applicable)"
                value={formData.cgpa}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="percentage"
                placeholder="Percentage (if applicable)"
                value={formData.percentage}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="year"
                placeholder="Year of Completion"
                value={formData.year}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={handleSaveNewDegree}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Degree
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
