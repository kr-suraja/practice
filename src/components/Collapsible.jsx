import React from "react";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [
    isExpanded,
    setIsExpanded
  ] = React.useState(false);

  const ref = React.useRef();

  const [height, setHeight] = React.useState();

  const handleToggle = e => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

  const classes = `list-group-item ${
    isExpanded ? "is-expanded" : null
  }`;
  const currentHeight = isExpanded ? height : 0;
  console.log("🚀 ~ file: Collapsible.jsx:24 ~ Collapsible ~ currentHeight:", currentHeight)
  return (
    <div
      className={classes}
      onClick={handleToggle}
    >
      <div className="flex justify-between align-middle font-semibold  rounded-md px-10 py-5 py ">
        <h2>{title}</h2>
        <div className=" flex align-center">
          { isExpanded ?
        <svg data-accordion-icon class="w-4 h-4  shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>:
      <svg data-accordion-icon class="w-4 h-4 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
          }

        </div>
      </div>
      <div
        className=" overflow-hidden transition-all duration-300 ease-in-outcard-collapse  px-10   "
        style={{ height: currentHeight + "px" }}
      >
        <div className="pb-4 text-[#6F6C90]" ref={ref}>
          {children}
        </div >
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string
};

export default Collapsible;
