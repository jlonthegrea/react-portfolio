import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];

  const handleClick = (tab) => {
    handlePageChange(tab);
  };

  return (
    <div className="nav is-centered">
      <ul className="nav-list">
        {tabs.map((tab) => (
          <li
            className={`nav-item ${currentPage === tab ? "is-active" : ""}`}
            key={tab}
          >
            <a
              href={`${tab.toLowerCase()}`}
              onClick={handleClick.bind(null, tab)}
              className={`nav-link ${currentPage === tab ? "is-active" : ""}`}
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
