import React from "react";

import { BsFillPlusSquareFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaUserShield } from "react-icons/fa";

const links = [
  {
    text: "add job",
    path: ".",
    icon: <BsFillPlusSquareFill />,
  },
  {
    text: "all jobs",
    path: "all-jobs",
    icon: <MdWork />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <FaUserShield />,
  },
];

export default links;
