import { TiLocationArrow, TiBriefcase, TiCalendar } from "react-icons/ti";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { Link, Form } from "react-router-dom";
import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);
import ModalApply from "./ModalApply";
import { useDashboardContext } from "../pages/DashboardLayout";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
  description,
  website,
  createdBy,
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");

  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const { user } = useDashboardContext();
  const isOwner = user._id === createdBy;

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
        <div className="actions">
          {isOwner && user.role === "hirer" && (
            <>
              <Link to={`../edit-job/${_id}`} className="custom-edit-btn">
                {<BiEditAlt />}
              </Link>
              <Form method="post" action={`../delete-job/${_id}`}>
                <button type="submit" className="custom-delete-btn">
                  {<BiTrash />}
                </button>
              </Form>
            </>
          )}
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <div>
            <JobInfo icon={<TiLocationArrow />} text={jobLocation} />
            <JobInfo icon={<TiCalendar />} text={date} />
            <JobInfo icon={<TiBriefcase />} text={jobType} />
          </div>
        </div>
        <div className="status-btn-container">
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
          {user.role !== "candidate" && (
            <button className="btn btn-apply" onClick={toggleModal}>
              apply
            </button>
          )}
        </div>
      </div>
      <button className="btn see-more-btn" onClick={toggleDescription}>
        {showDescription ? "See Less" : "See More"}
      </button>

      {showDescription && (
        <div style={{ marginTop: "1em" }} className="description">
          {description}
          <div style={{ marginTop: "1em" }}>{website}</div>
        </div>
      )}
      {showModal && (
        <ModalApply
          showModal={showModal}
          toggleModal={toggleModal}
          company={company}
          position={position}
          jobLocation={jobLocation}
          date={date}
          jobType={jobType}
          description={description}
        />
      )}
    </Wrapper>
  );
};

export default Job;
