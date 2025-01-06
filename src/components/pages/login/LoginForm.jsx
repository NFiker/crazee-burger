import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
  // State
  const [inputValue, setInputValue] = useState("Bob");
  const navigate = useNavigate();

  //Comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accédez à votre espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  background-color: green;
`;
