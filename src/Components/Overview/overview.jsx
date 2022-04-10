import React from "react";
import "./overview.css";

export default function Overview() {
  return (
    <>
      <div className="overview-section-s1">
        <div>
          <h1 className="h1-overview">Ethereum Resources for Developers</h1>
          <hr className="hr" />
        </div>

        <p className="overview-section-p">
          BlockSources is created to help people further in their knowledge of
          Ethereum. Studying myself to become a developer in this field, I came
          across many useful resources that helped me tremendously.
          <br />
          <br />
          You will find all the resources that I discovered over time. The
          resources will be updated regularly to give developers the latest
          available resources. As the ethereum space is constantly evolving,
          more and more amazing tools are build.
        </p>
      </div>
    </>
  );
}
