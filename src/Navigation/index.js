import { Link } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", gap: 20, fontSize: 20 }}>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
