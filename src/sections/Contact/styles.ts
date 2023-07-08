import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 10rem 2rem;
`

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.1875rem;

  // 1065px
  @media (max-width: 66.5625rem) {
    flex-direction: column;
  }

  // 630px
  @media (max-width: 39.375rem) {
    > img {
      width: 95%;
    }
  }

  > div {
    > h1 {
      color: ${({ theme }) => theme.colors.secondary.grayHeadline};
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
    }

    :nth-child(3) {
      margin-top: 1rem;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 8px;

      p {
        color: ${({ theme }) => theme.colors.secondary.grayParagraph};
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }
    }

    > button {
      padding: 0.625rem 1.5rem;
      border: 0;
      border-radius: 2.5rem;
      background-color: ${({ theme }) => theme.colors.primary.green};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.secondary.white};
      text-transform: uppercase;

      margin-top: 2.5rem;

      &:focus {
        outline: auto;
        outline-color: ${({ theme }) => theme.colors.primary.green};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.greenHover};
      }
    }
  }
`
