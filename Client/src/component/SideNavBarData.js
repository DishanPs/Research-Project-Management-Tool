import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  MdSupervisorAccount,
  MdOutlineSupervisorAccount,
  MdTopic,
  MdOutlineTopic,
} from "react-icons/md";
import { AiOutlineWechat, AiFillFileAdd } from "react-icons/ai";
import {
  HiDocumentText,
  HiPresentationChartBar,
  HiTemplate,
  HiUsers,
  HiDocumentSearch,
} from "react-icons/hi";
import { GiFiles } from "react-icons/gi";

export const supervisorsidenavbarData = [
  {
    title: "Supervisor Requests",
    path: "/supstaff",
    icon: <MdSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Co-Supevisor Requests",
    path: "/cosupstaff",
    icon: <MdOutlineSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Chat with Groups",
    path: "/chat",
    icon: <AiOutlineWechat />,
    cName: "nav-text",
  },
  {
    title: "Evaluate Documents",
    path: "/evaluatedocument",
    icon: <HiDocumentText />,
    cName: "nav-text",
  },
];

export const panelsidenavbarData = [
  {
    title: "Evaluate Topics",
    path: "/viewtopics",
    icon: <MdTopic />,
    cName: "nav-text",
  },
  {
    title: "Evaluate Presentations",
    path: "/evaluatepresentation",
    icon: <HiPresentationChartBar />,
    cName: "nav-text",
  },
];

export const studentsidenavbarData = [
  {
    title: "Create Group",
    path: "/creategroups",
    icon: <FaUsers />,
    cName: "nav-text",
  },
  {
    title: "Request Supervisor",
    path: "/supstudent",
    icon: <MdSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Ruquest Co-Supervisor",
    path: "/cosupstudent",
    icon: <MdOutlineSupervisorAccount />,
    cName: "nav-text",
  },
  {
    title: "Register Topic",
    path: "/registertopic",
    icon: <MdTopic />,
    cName: "nav-text",
  },
  {
    title: "Topic Status",
    path: "/studenttopicapproval",
    icon: <MdOutlineTopic />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <AiOutlineWechat />,
    cName: "nav-text",
  },
  {
    title: "Submissions",
    path: "#submisson",
    icon: <AiFillFileAdd />,
    cName: "nav-text",
  },
  {
    title: "Templates",
    path: "#template",
    icon: <HiTemplate />,
    cName: "nav-text",
  },
];

export const adminsidenavbarData = [
  {
    title: "Users",
    path: "#users",
    icon: <HiUsers />,
    cName: "nav-text",
  },
  {
    title: "Submission Types",
    path: "#cosuprequest",
    icon: <GiFiles />,
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
    path: "/createmarking",
    icon: <HiDocumentSearch />,
    cName: "nav-text",
  },
  {
    title: "Templates",
    path: "#evaluatedocument",
    icon: <HiTemplate />,
    cName: "nav-text",
  },
];
