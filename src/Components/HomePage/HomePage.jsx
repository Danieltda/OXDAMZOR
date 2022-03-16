import React from "react";
import Overview from "../Overview/overview";
import Resources from "../Resources/resources";

function HomePage() {
  return (
    <>
      <section>
        <Overview />
      </section>
      <section>
        <Resources />
      </section>
    </>
  );
}

export default HomePage;
