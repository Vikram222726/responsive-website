import React from "react";

const AddReviews = ({ name, city, country, text, flag, person }) => {
  return(
      <div className="col-md-4 col-sm-12 col-xs-12 mx-auto mycol">
          <div className="revHead">
              <div style={{ backgroundImage: "url(" + person + ")" }} className="revpic" />
              <div className="nameFlag">
                  <div className="revname">{name}</div>
                  <div style={{ backgroundImage: "url(" + flag + ")" }} className="revflag" />
                  <div className="revadd">{city}, {country}</div>
              </div>
              <div className="myContent">
                  {text}
              </div>
          </div>
      </div>
  )
};

export default AddReviews;
