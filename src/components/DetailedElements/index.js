import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import "./index.css";
import Sidebar from "../Sidebar";

const sideBarList = [
  {
    id: 2,
    content: "Inventory",
  },
  {
    id: 3,
    content: "Orders",
  },
  {
    id: 4,
    content: "Returns",
  },
  {
    id: 5,
    content: "Customers",
  },
  {
    id: 6,
    content: "Shipping",
  },
  {
    id: 7,
    content: "Channel",
  },
];

const DetailedElements = () => {
  const [isActive, setIsActive] = useState(true);
  const { id } = useParams();
  console.log(id);
  //   console.log(parseInt(id));
  const filteredList = sideBarList.filter(
    (eachItem) => eachItem.id === parseInt(id)
  );
  console.log(filteredList);

  const sidebarButtonTrigger = () =>
    setIsActive((prevIsActive) => !prevIsActive);

  return (
    <div className="bg-container">
      {isActive ? (
        <div className="left-container">
          <ul>
            <Link to="/" className="link">
              <li className="list-type-container">Dashboard</li>
            </Link>
            {sideBarList.map((eachItem) => (
              <Sidebar sideBarList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      <div>
        <div className="right-container">
          <button
            type="button"
            className="button"
            onClick={sidebarButtonTrigger}
          >
            <RxHamburgerMenu />
          </button>
          <h1 className="heading">{filteredList[0].content}</h1>
        </div>
        <div>
          <p>Welcome to {filteredList[0].content} Page</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedElements;
