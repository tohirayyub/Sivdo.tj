import React from "react";
import { Link } from "react-router-dom";

export default function AllCategoriesRealEstate() {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        width: "87vw",
        height: "fit-content",
        position: 'absolute',
        left:'9%',
        top:'15%'
      }}
    >
      AllCategoriesTransport
      <button>
        <Link to="/">BACK</Link>
      </button>
    </div>
  );
}
