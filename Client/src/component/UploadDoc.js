import React, { useState, useEffect } from "react";
import UpForm from "./UpForm";
import "./UploadStyle.css";
import AdminSideNavBar from "./AdminSideNavBar";

const UploadDoc = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/958467.jpg")`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <AdminSideNavBar />
      <div
        style={{
          marginLeft: "200px",
        }}
      >
        <UpForm />
      </div>
    </div>
  );
};

export default UploadDoc;
