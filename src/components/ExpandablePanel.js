import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function ExpandablePanel({ header, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick(e) {
    console.log(e.target.localName);
    if (e.target.localName !== "div") {
      return;
    }
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="mb-2 border rounded">
      <div
        onClick={handleClick}
        className="flex p-2 gap-3 items-center justify-between cursor-pointer"
      >
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</div>
      </div>
      {isExpanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
