import React, { useState } from "react";
import api , {API_BASE_URL} from "../../utils/api";
const API_URL = `${API_BASE_URL}/about`; // backend endpoint

const About = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    experienceYears: "",
    projectsCompleted: "",
    clientsSatisfied: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isUpdate) {
        await api.put(API_URL, formData);
        setMessage("About section updated successfully ✅");
      } else {
        await api.post(API_URL, formData);
        setMessage("About section created successfully ✅");
        setIsUpdate(true);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>About Section Details</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="title"
          placeholder="Title (e.g. About Me)"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          name="subtitle"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experienceYears"
          placeholder="Years of Experience"
          value={formData.experienceYears}
          onChange={handleChange}
          min="0"
          required
        />

        <input
          type="number"
          name="projectsCompleted"
          placeholder="Projects Completed"
          value={formData.projectsCompleted}
          onChange={handleChange}
          min="0"
          required
        />

        <input
          type="number"
          name="clientsSatisfied"
          placeholder="Clients Satisfied"
          value={formData.clientsSatisfied}
          onChange={handleChange}
          min="0"
          required
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : isUpdate
            ? "Update About"
            : "Create About"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};

export default About;

