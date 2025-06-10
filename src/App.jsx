import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: aqua;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 7px;
  background-color: #007bff;
  color: white;
`;
function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
