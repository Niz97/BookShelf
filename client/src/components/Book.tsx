import React from 'react'
import styled from 'styled-components';

const StyledBook = styled.div`
  color: white;
  padding: 0.5rem;
  border-radius: 18px;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(45deg,#4099ff,#73b4ff);
`;

function Book( {name, author, genre }) {
  return (
    <StyledBook className="book">
      <p>{name}</p>
      <p>{author}</p>
      <p>{genre}</p>
    </StyledBook>
  )
}

export default Book