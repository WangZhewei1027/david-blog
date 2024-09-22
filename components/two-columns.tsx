import React from "react";
import styles from "./two-columns.module.css";

interface TwoColumnsProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumns: React.FC<TwoColumnsProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="flex flex-col">
      <div className="p-3">{leftContent}</div>
      <div className="p-4">{rightContent}</div>
    </div>
  );
};

export default TwoColumns;
