
import React, { useState } from "react";
import api from "../../utils/api";
function Experience() {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    location: "",
    duration: "",
    image: "",
    points: [""],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle points change
  const handlePointChange = (index, value) => {
    const updatedPoints = [...formData.points];
    updatedPoints[index] = value;
    setFormData({ ...formData, points: updatedPoints });
  };

  // Add new point
  const addPoint = () => {
    setFormData({ ...formData, points: [...formData.points, ""] });
  };

  // Remove point
  const removePoint = (index) => {
    const updatedPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: updatedPoints });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const createExperiences = await api.post(
       "/experiences",
        data,
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );



      setMessage("Experience added successfully ✅");
      setFormData({
        role: "",
        company: "",
        location: "",
        duration: "",
        image: "",
        points: [""],
      });

      console.log(createExperiences)
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add Experience</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. Sep 2024 – Feb 2025)"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <div>
          <h4>Points</h4>
          {formData.points.map((point, index) => (
            <div key={index} style={styles.pointRow}>
              <input
                type="text"
                placeholder={`Point ${index + 1}`}
                value={point}
                onChange={(e) =>
                  handlePointChange(index, e.target.value)
                }
                required
              />
              {formData.points.length > 1 && (
                <button
                  type="button"
                  onClick={() => removePoint(index)}
                >
                  ❌
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addPoint}>
            ➕ Add Point
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Experience"}
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
  pointRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
  },
};

export default  Experience;

