import { Link } from "react-router-dom";

import "./index.css";

const Sidebar = (props) => {
  const { sideBarList } = props;
  const { content, id } = sideBarList;
  return (
    <Link to={`/sidebar/${id}`} className="link">
      <li className="list-type-container">{content}</li>
    </Link>
  );
};

export default Sidebar;
