import classNames from "classnames";

const Skeleton = ({ boxes, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200",
    className
  );

  return Array(boxes)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={outerClassNames}>
        <div className={innerClassNames} />
      </div>
    ));
};

export default Skeleton;
