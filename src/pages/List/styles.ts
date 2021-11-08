import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;

  .movies-pagination {
    margin-top: 1em;
    list-style-type: none;
    display: flex;
    justify-content: center;
    color: 'twitter.500';
    font-size: 1em;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 0.3em;
      width: 1em;
      height: 10px;
      border: 3px solid var(--chakra-colors-blue-500);
      padding: 0.7em;
      color: var(--chakra-colors-blue-700);
      border-radius: 3px;

      a {
        display: flex;
        align-items: center;
      }

      svg {
        width: 23px;
        height: 23px;
      }

      &:hover {
        font-weight: bold;
      }

      &.selected {
        font-weight: bold;
      }

      &.next {
        min-width: 2em;
      }

      &.previous {
        min-width: 2em;
      }
    }
  }
`;
