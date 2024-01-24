import React from "react";
import Overview from "../Overview/overview";
import Resources from "../Resources/resources";
import ETHcalc from "../ETHcalc/ETHcalc";

function HomePage() {
  return (
    <>
      <section>
        <Overview />
      </section>
      <section>
        <Resources />
      </section>
      <section>
      <ETHcalc/>
      </section>
    </>
  );
}

export default HomePage;
