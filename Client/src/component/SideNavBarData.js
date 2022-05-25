import React from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaHistory,
  FaIndustry,
} from "react-icons/fa";

export const supervisorsidenavbarData = [
  {
    title: "Supervisor Requests",
    path: "#topic",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Co-Supevisor Requests",
    path: "#evaluatepresentation",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Chat with Groups",
    path: "/chat",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Evaluate Documents",
    path: "#evaluatedocument",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];

export const panelsidenavbarData = [
  {
    title: "Evaluate Topics",
    path: "#topic",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Evaluate Presentations",
    path: "#evaluatepresentation",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];

export const studentsidenavbarData = [
  {
    title: "Create Group",
    path: "#topic",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Request Supervisor",
    path: "/chat",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Ruquest Co-Supervisor",
    path: "#evaluatedocument",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Register Topic",
    path: "#evaluatepresentation",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];
