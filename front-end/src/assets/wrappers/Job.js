import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: flex;
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: space-between;
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
    margin-right: 5rem;
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
  .actions {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    margin-right: 0.2rem;
  }
  .custom-edit-btn {
    color: var(--primary-500);
    background-color: var(--white);
    border: 1px solid var(--primary-500);
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.375rem 0.6rem;
    box-shadow: none;
    transition: var(--transition);
    text-transform: capitalize;
    margin-bottom: 0.3rem;
  }
  .custom-delete-btn {
    color: var(--primary-500);
    background-color: var(--white);
    border: 1px solid var(--primary-500);
    border-radius: var(--border-radius);
    letter-spacing: var(--letter-spacing);
    padding: 0.37rem 0.68rem;
    box-shadow: none;
    transition: var(--transition);
    text-transform: capitalize;
  }
  .custom-edit-btn:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
  .custom-delete-btn:hover {
    cursor: pointer;
    background-color: var(--primary-500);
    color: var(--white);
  }

  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    align-items: center;
    > div {
      display: flex;
      gap: 1rem;
    }
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    display: flex;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .status-btn-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .btn-apply {
    font-size: 1rem;
    width: 70%;
  }

  .see-more-btn {
    background: transparent;
    color: var(--primary-500);
    width: 100%;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

export default Wrapper;
