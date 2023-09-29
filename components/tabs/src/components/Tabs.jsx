import React, { useState } from "react";

const Tabsdata = ["i m one", "i m two", "i m three", "i m four"];
const Tabs = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div>
      <div>
        {Tabsdata.map((item, index) => {
          return (
            <button key={index} onClick={() => setIsActive(index)}>
              btn{index + 1}
            </button>
          );
        })}
      </div>
      {Tabsdata[isActive]}
    </div>
  );
};

export default Tabs;
