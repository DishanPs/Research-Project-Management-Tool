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
    path: "#supervisorrequest",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Co-Supevisor Requests",
    path: "#cosuprequest",
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
    path: "/viewtopics",
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
    path: "/creategroups",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Request Supervisor",
    path: "#reqsup",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Ruquest Co-Supervisor",
    path: "#reqcosup",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Register Topic",
    path: "/registertopic",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];
