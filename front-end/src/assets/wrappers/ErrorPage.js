import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;

  img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--primary-500);
    text-decoration: none;
    font-weight: bold;
    margin-top: 1rem;
    display: inline-block;
    border: 2px solid var(--primary-500);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: var(--primary-500);
      color: var(--white);
    }
  }
`;

export default Wrapper;
