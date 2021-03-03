import React from "react";
import Show from "./shows";
import AddSingers from "./addSingers";
import Review from "./review";
import AddReviews from "./addreviews";

const Tagbar = ({ data, reviews }) => {
  return (
    <div className="tagbar">
      <div className="container-fluid">
        <div className="row tgbar">
          <div className="col-md-3 col-xs-12 col-sm-6 circle">
            <div className="main-div divs1">
              <div className="tag-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-heart hearts"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div className="tag-no">0</div>
              <div className="label">Label</div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 col-sm-6 circle">
            <div className="main-div">
              <div className="tag-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-back merabi"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </div>
              <div className="tag-no">0</div>
              <div className="label">Label</div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 col-sm-6 circle">
            <div className="main-div">
              <div className="tag-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-back merabi"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </div>
              <div className="tag-no">0</div>
              <div className="label">Label</div>
            </div>
          </div>
          <div className="col-md-3 col-xs-12 col-sm-6 circle">
            <div className="main-div">
              <div className="tag-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-back merabi"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </div>
              <div className="tag-no">0</div>
              <div className="label">Label</div>
            </div>
          </div>
          <div className="col-md-12 col-xs-12 col-sm-12 mx-auto sb">
            {<Show />}
          </div>
          {data.map((ele) => (
            <AddSingers
              image={ele.image}
              name={ele.name}
              music={ele.music}
              key={ele.name}
            />
          ))}
          <div className="col-md-12 col-xs-12 col-sm-12 mx-auto rb">
            <Review />
          </div>
          {reviews.map((ele) => (
            <AddReviews
              name={ele.name}
              city={ele.city}
              country={ele.country}
              text={ele.text}
              flag={ele.flag}
              person={ele.person}
              key={ele.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tagbar;
