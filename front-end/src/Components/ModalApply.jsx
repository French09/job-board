import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/ModalApply";
import JobInfo from "./JobInfo";
import { TiLocationArrow, TiBriefcase, TiCalendar } from "react-icons/ti";

const ModalApply = ({
  showModal,
  toggleModal,
  company,
  position,
  jobLocation,
  date,
  jobType,
  description,
  recruiterEmail, // Ajout de la prop pour l'adresse e-mail du recruteur
}) => {
  const [formData, setFormData] = useState({
    destinataire: recruiterEmail, // Adresse e-mail du recruteur
    sujet: position, // Sujet de l'e-mail (nom du poste)
    texte: "", // Texte du message
  });

  const handleSendClick = async () => {
    const { destinataire, sujet, texte } = formData;
    const fileInput = document.querySelector(".application-file");

    const formData = new FormData();
    formData.append("destinataire", destinataire);
    formData.append("sujet", sujet);
    formData.append("texte", texte);
    formData.append("file", fileInput.files[0]);

    try {
      const response = await fetch("/api/v1/applies/envoyer-email", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Réponse du serveur :", data);
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <div
        className={showModal ? "modal-container show-modal" : "modal-container"}
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleModal}>
            <FaTimes />
          </button>
          <header>
            <div className="main-icon">{company.charAt(0)}</div>
            <div className="info">
              <h5>{position}</h5>
              <p>{company}</p>
            </div>
          </header>
          <div className="job-details">
            <div>
              <JobInfo icon={<TiLocationArrow />} text={jobLocation} />
              <JobInfo icon={<TiCalendar />} text={date} />
              <JobInfo icon={<TiBriefcase />} text={jobType} />
            </div>
          </div>
          <p>{description}</p>
          <textarea
            className="application-textarea"
            placeholder="Your message here"
            name="texte"
            value={formData.texte}
            onChange={handleInputChange}
          />
          <div className="button-container">
            <input type="file" className="application-file" />
            <button className="btn btn-send" onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ModalApply;
