const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none", gap: 20, fontSize: 20 }}>
        {routes.map(({ path, label }) => (
          <li key={path}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
