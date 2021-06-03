import styled from 'styled-components';

const StyledScroller = styled.button`
  position: fixed;
  bottom: 3%;
  right: 3%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin: 0 auto;

  border-radius: 50%;
  outline: none;
  border: none;

  background-color: #e0e8e5;
  color: #3f51b5;

  font-family: inherit;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  line-height: 1.33;

  overflow: hidden;
  cursor: pointer;
  opacity: 0.5;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.05);
  }

  @media screen and (min-width: 1024px) {
    right: 6%;

    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 576px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 575px) {
    width: 46px;
    height: 46px;
  }
`;

export default StyledScroller;

/*


*/
