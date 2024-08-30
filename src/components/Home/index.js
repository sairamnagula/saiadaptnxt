import { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleInfo } from "react-icons/fa6";

import Sidebar from "../Sidebar";
import Linechart from "../Linechart";
import Piechart from "../PieChart";

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

class Home extends Component {
  state = {
    mainContent: "Dashboard",
    isActive: false,
  };

  sidebarButtonTrigger = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  render() {
    const { mainContent, isActive } = this.state;
    return (
      <div className="bg-container">
        {isActive && (
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
        )}
        <div>
          <div className="right-container">
            <button
              type="button"
              className="button"
              onClick={this.sidebarButtonTrigger}
            >
              <RxHamburgerMenu />
            </button>
            <h1 className="heading">{mainContent}</h1>
          </div>
          <div className="home-container">
            <div className="line-chart-container">
              <h1 className="heading-title">
                Sales vs Orders
                <FaCircleInfo />
              </h1>
              <Linechart />
            </div>
            <hr />
            <div className="pie-chart-container">
              <h1 className="heading-title">
                Portion Of Sales
                <FaCircleInfo />
              </h1>
              <Piechart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
