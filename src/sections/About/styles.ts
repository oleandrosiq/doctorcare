import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 10rem 2rem;
  background: ${({ theme }) => theme.colors.primary.beige};
`

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.1875rem;

  > div {
    h4 {
      color: ${({ theme }) => theme.colors.primary.green};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 0.07rem;
      text-transform: uppercase;
    }

    h1 {
      color: ${({ theme }) => theme.colors.secondary.grayHeadline};
      font-size: 2.5rem;
      font-weight: 700;
      margin-top: 0.625rem;
    }

    p {
      color: ${({ theme }) => theme.colors.secondary.grayParagraph};
      font-size: 1rem;
      font-weight: 400;
      line-height: 150%;

      margin-top: 1.5rem;
    }
  }

  // 1050px
  @media (max-width: 65.625rem) {
    flex-direction: column-reverse;
  }

  // 650px
  @media (max-width: 40.625rem) {
    > div {
      > h1 {
        font-size: 2.125rem; // 34px
      }
    }
  }

  @media (max-width: 550px) {
    > img {
      width: 99%;
    }
  }
`
