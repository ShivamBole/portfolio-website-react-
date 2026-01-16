import React, { useState } from "react";
import api, {API_BASE_URL} from "../../utils/api"

const API_URL =  `${API_BASE_URL}/skills`;

const Skill= () => {
  const [formData, setFormData] = useState({
    sectionTitle: "",
    description: "",
    categories: [
      {
        title: "",
        skills: [""],
      },
    ],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  // Section fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Category title change
  const handleCategoryTitleChange = (index, value) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[index].title = value;
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Skill change
  const handleSkillChange = (catIndex, skillIndex, value) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[catIndex].skills[skillIndex] = value;
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Add category
  const addCategory = () => {
    setFormData({
      ...formData,
      categories: [...formData.categories, { title: "", skills: [""] }],
    });
  };

  // Remove category
  const removeCategory = (index) => {
    const updatedCategories = formData.categories.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Add skill
  const addSkill = (catIndex) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[catIndex].skills.push("");
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Remove skill
  const removeSkill = (catIndex, skillIndex) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[catIndex].skills = updatedCategories[
      catIndex
    ].skills.filter((_, i) => i !== skillIndex);
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (isUpdate) {
        await axios.put(API_URL, formData);
        setMessage("Skills updated successfully ✅");
      } else {
        await axios.post(API_URL, formData);
        setMessage("Skills created successfully ✅");
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
      <h2>Skills & Technologies</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="sectionTitle"
          placeholder="Section Title"
          value={formData.sectionTitle}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Section Description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          required
        />

        <h3>Skill Categories</h3>

        {formData.categories.map((category, catIndex) => (
          <div key={catIndex} style={styles.categoryBox}>
            <input
              placeholder="Category Title (e.g. Frontend)"
              value={category.title}
              onChange={(e) =>
                handleCategoryTitleChange(catIndex, e.target.value)
              }
              required
            />

            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={styles.skillRow}>
                <input
                  placeholder="Skill (e.g. React)"
                  value={skill}
                  onChange={(e) =>
                    handleSkillChange(
                      catIndex,
                      skillIndex,
                      e.target.value
                    )
                  }
                  required
                />

                {category.skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      removeSkill(catIndex, skillIndex)
                    }
                  >
                    ❌
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addSkill(catIndex)}
            >
              ➕ Add Skill
            </button>

            {formData.categories.length > 1 && (
              <button
                type="button"
                onClick={() => removeCategory(catIndex)}
              >
                🗑 Remove Category
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addCategory}>
          ➕ Add Category
        </button>

        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : isUpdate
            ? "Update Skills"
            : "Create Skills"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "700px",
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
  categoryBox: {
    border: "1px solid #ccc",
    padding: "12px",
    borderRadius: "6px",
  },
  skillRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "8px",
  },
};

export default Skill;
