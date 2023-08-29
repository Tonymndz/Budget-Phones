import React from "react";
import groupOfPhones from './images/displayed-phones.jpg'
import "./Title.css";

let Title = (): JSX.Element => {
  return (
    <div className="Title">
      <h1 className="TitleHeader">
        Best Budget Phones under $60, $80, $100, and $120
      </h1>
      <div id="FlexAligning">
        <span id="Updated">Updated August 20, 2023 at 11:31 AM</span>
        <span id="Updated">By Tony Mendez</span>
      </div>
      <img id="PhoneIMG"
        src={groupOfPhones}
        alt="Group Of Phones"
      />
      <p>
        As each year passes by, new and better phones are created, causing more
        expensive phones to become slightly cheaper and cheap phones to
        disappear or increase in price. Since companies will no longer produce
        them of being so outdated. So, depending on how much cash you're willing to
        spend on a phone, can be beneficial or unbeneficial, but never the
        less we <b>DEAL WITH WHAT WE GOT</b>. 
        <br/><br/>
        So I've compared up to over{" "}
        <b>90 phones</b> and created a list to show you the best phones in
        terms of specs sorted by specific price categories of under $60, $80, $100 and $120. 
        Since we are going extreme budget mode, the best deals we could get are at{" "}
        <b>EBAY</b>!{" "}
        <br/><br/>

          The goal of this website is to let you know that these great budget
          phone options exist!
      </p>
    </div>
  );
};

export default Title;
