import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "dashboard" },
  { name: "Banner", path: "banner" },
  { name: "About", path: "about" },
  { name: "Skill", path: "skill" },
  { name: "Add Project", path: "add-project" },
  // { name: "Certificate", path: "certificate" },
  // { name: "Education", path: "education" },
  { name: "Experience", path: "experience" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-gray-800 p-6 flex flex-col gap-3">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "active text-center"
              : "p-3 rounded-full hover:gradient transition text-center"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
