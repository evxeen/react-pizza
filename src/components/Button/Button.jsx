import classNames from "classnames";

export function Button({ className, outline, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, { "button-outline": outline })}
    >
      {children}
    </button>
  );
}
