import React from "react";

function Loading() {
  return (
    <center>
      <div className="loadingBar">
        <div className="spinner-grow text-primar spin" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </center>
  );
}

export default Loading;
