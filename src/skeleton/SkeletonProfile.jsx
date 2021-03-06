import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonProfile = ({ theme }) => {
  const classes = theme || "light";
  return (
    <div className={`skeleton-wrapper ${classes}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
