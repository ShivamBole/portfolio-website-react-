import { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [techstack, setTechStack] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images.length) {
      alert("Please upload at least one image");
      return;
    }

    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
      alert("Admin authentication required");
      return;
    }

    const formData = new FormData();
    formData.append("techstack", techstack);
    formData.append("title",title);
    formData.append("description", description);
    formData.append("projectUrl", projectUrl);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      setLoading(true);

      const res = await api.post(
        "/projects",
        formData,
        {
          headers: {
            Authorization: adminToken,
          },
        }
      );

      alert("Project created successfully!");

      // Reset form
      setTitle("");
      setDescription("");
      setProjectUrl("");
      setImages([]);
      setPreviews([]);
      setTechStack("")

      console.log(res.data);
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Session expired or unauthorized. Please login again.");
        localStorage.removeItem("adminToken");
        window.location.reload();
      } else {
        alert(error.response?.data?.message || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit} style={styles.form} className="p-2 rounded-lg text-black">
                <input
          type="text"
          placeholder="Tech Stack"
          value={techstack}
          onChange={(e) => setTechStack(e.target.value)}
          required
          className="p-2 rounded-lg text-black"
        />
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-2 rounded-lg text-black"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="p-2 rounded-lg text-black"
        />

        <input
          type="url"
          placeholder="Project URL"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          required
          className="p-2 rounded-lg text-black"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 rounded-lg text-black"
        />

        {/* Image Preview */}
        <div style={styles.previewContainer}>
          {previews.map((src, index) => (
            <img key={index} src={src} alt="preview" style={styles.preview} />
          ))}
        </div>

        <button type="submit" className="btn py-2" disabled={loading}>
          {loading ? "Uploading..." : "Create Project"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
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
  previewContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  preview: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default AddProject;
