import styled from "styled-components";
const Wrapper = styled.aside`
  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-modal {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: 60vh;
    height: 75vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-500);
    cursor: pointer;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: space-between;
    margin-top: -2rem;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    margin-right: 2rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .job-details {
    margin-left: -9rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .p {
    margin-top: 10rem;
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .application-textarea {
    margin-top: 1rem;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }

  .btn-send {
    margin-top: 1rem;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
  }
`;
export default Wrapper;
