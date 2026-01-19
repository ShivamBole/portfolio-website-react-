import React, { useState } from "react";
import api, { API_BASE_URL } from "../../utils/api";

const API_URL = API_BASE_URL;

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isUpdate) {
        await api.put(API_URL, formData);
        setMessage("Banner updated successfully ✅");
      } else {
        await api.post(API_URL, formData);
        setMessage("Banner created successfully ✅");
        setIsUpdate(true);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={styles.container}>
      <h1>Banner Details</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Full Name
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role / Title
          <input
            name="role"
            placeholder="Your Role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Short Description
          <textarea
            name="shortDescription"
            rows={3}
            value={formData.shortDescription}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Resume Link
          <input
            name="resumeLink"
            placeholder="Resume Link"
            value={formData.resumeLink}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image URL
          <input
            name="profileImage"
            placeholder="Profile Image URL"
            value={formData.profileImage}
            onChange={handleChange}
          />
        </label>

        <h2>Social Links</h2>

        <input name="linkedin" placeholder="LinkedIn" value={formData.socialLinks.linkedin} onChange={handleSocialChange} />
        <input name="github" placeholder="GitHub" value={formData.socialLinks.github} onChange={handleSocialChange} />
        <input name="instagram" placeholder="Instagram" value={formData.socialLinks.instagram} onChange={handleSocialChange} />
        <input name="twitter" placeholder="Twitter" value={formData.socialLinks.twitter} onChange={handleSocialChange} />
        <input name="email" placeholder="Email" value={formData.socialLinks.email} onChange={handleSocialChange} />

        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : isUpdate ? "Update Banner" : "Create Banner"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </main>
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
