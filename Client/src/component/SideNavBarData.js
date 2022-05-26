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
    path: "/supstaff",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Co-Supevisor Requests",
    path: "/cosupstaff",
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
    path: "/supstudent",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Ruquest Co-Supervisor",
    path: "/cosupstudent",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Register Topic",
    path: "/registertopic",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Topic Status",
    path: "/studenttopicapproval",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Submissions",
    path: "#submisson",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Templates",
    path: "#template",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];

export const adminsidenavbarData = [
  {
    title: "Users",
    path: "#users",
    icon: <FaCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Submission Types",
    path: "#cosuprequest",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Groups",
    path: "/viewgroups",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Marking Schemes",
    path: "#evaluatedocument",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
  {
    title: "Templates",
    path: "#evaluatedocument",
    icon: <FaIndustry />,
    cName: "nav-text",
  },
];
