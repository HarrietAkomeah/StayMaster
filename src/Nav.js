import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
function Nav() {
  let history = useHistory();
  const onprev = () => {
    history.goBack();
  };
  return (
    <span>
      <div className="nav__mobile">
        <h3 style={{ color: "black", margin: "-7px 0 0 -15px" }}>
          <svg
            onClick={onprev}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Back"
            role="img"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
              cursor: "pointer",
            }}
          >
            <g fill="none">
              <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
            </g>
          </svg>
        </h3>
      </div>
      <div className="nav">
        <div className="nav__cont"></div>
        <span className="nav__logo" onClick={onprev}>

        </span>
      </div>
    </span>
  );
}
export default Nav;
