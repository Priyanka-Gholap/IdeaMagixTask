import { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: "",
    level: "Beginner",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/courses`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Course added successfully");
      setFormData({
        name: "",
        level: "Beginner",
        description: "",
        image: "",
      });
    } catch (error) {
      alert("Failed to add course");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* your existing inputs */}
    </form>
  );
};

export default AddCourse;
