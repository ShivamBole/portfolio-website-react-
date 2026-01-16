

import React, { useState } from "react";
import api , {API_BASE_URL} from "../../utils/api";

const API_URL = API_BASE_URL; // change if needed

const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    shortDescription: "",
    resumeLink: "",
    profileImage: "",
    socialLinks: {
      linkedin: "",
      github: "",
      instagram: "",
      twitter: "",
      email: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false); 
  // false = create, true = update

  // Handle normal inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle social links
  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isUpdate) {
        // UPDATE banner
        await api.put(API_URL, formData);
        setMessage("Banner updated successfully ✅");
      } else {
        // CREATE banner
        await api.post(API_URL, formData);
        setMessage("Banner created successfully ✅");
        setIsUpdate(true); // next submit becomes update
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
      <h2>Banner Details</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="role"
          placeholder="Your Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <textarea
          name="shortDescription"
          placeholder="Short Description"
          rows={3}
          value={formData.shortDescription}
          onChange={handleChange}
          required
        />

        <input
          name="resumeLink"
          placeholder="Resume Link"
          value={formData.resumeLink}
          onChange={handleChange}
        />

        <input
          name="profileImage"
          placeholder="Profile Image URL"
          value={formData.profileImage}
          onChange={handleChange}
        />

        <h4>Social Links</h4>

        <input
          name="linkedin"
          placeholder="LinkedIn"
          value={formData.socialLinks.linkedin}
          onChange={handleSocialChange}
        />

        <input
          name="github"
          placeholder="GitHub"
          value={formData.socialLinks.github}
          onChange={handleSocialChange}
        />

        <input
          name="instagram"
          placeholder="Instagram"
          value={formData.socialLinks.instagram}
          onChange={handleSocialChange}
        />

        <input
          name="twitter"
          placeholder="Twitter"
          value={formData.socialLinks.twitter}
          onChange={handleSocialChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.socialLinks.email}
          onChange={handleSocialChange}
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : isUpdate
            ? "Update Banner"
            : "Create Banner"}
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

export default Banner;
