import Book from './Book'
import styled from 'styled-components';

const StyledShelf = styled.div`
  display: flex;
  border: solid 1px blue;
  padding: 1rem;
`
function BookShelf({ reviews }) {
  return (
    <StyledShelf className="shelf-container">
    {reviews.map((review) => (
      <Book 
       // TODO::Use redux-toolkit to gen unique keys
        key={`${review.name}-key-${(new Date().valueOf() - Math.random()*(1e+12))}`}
        author={review.author}
        genre={review.genre}
        name={review.name}
      />
    ))}
  </StyledShelf>
  )
}

export default BookShelf