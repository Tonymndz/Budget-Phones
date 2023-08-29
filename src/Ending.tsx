import React from "react";
import "./Ending.css";

let Ending = (): JSX.Element => {
  return (
    <div className="Ending">
      <h2>Ending Notes</h2>
      <hr />
      <p>
        A quick reminder, all these phones I picked were picked{" "}
        <b>solely based on specs</b>. So keep in mind nothing including personal
        feel, style or touch judged what I picked. <br/><br/>Whenever you find
        yourself in a case of needing to compare phones with each other. There
        is this <b>awesome site</b> that I used which is called{" "}
        <a href="https://www.phonemore.com/">phonemore.com</a> and it's one of the{" "}
        <b>best sites</b> I've used to compare all these phones here against
        each other and other phones.
      </p>
    </div>
  );
};

export default Ending;
