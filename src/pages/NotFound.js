import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
        consectetur fuga labore eveniet officia, dolores cupiditate iure quam
        incidunt quidem non sit ipsam error distinctio aut eaque nostrum.
        Obcaecati, fugit.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
