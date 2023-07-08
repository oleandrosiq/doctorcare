import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.greenLight2};

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-bottom: 10rem;

  > h4 {
    margin-top: 190px;
    color: ${({ theme }) => theme.colors.primary.green};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 1.12px;
    text-transform: uppercase;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.secondary.grayHeadline};
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }

  // 830px
  @media (max-width: 51.875rem) {
    > h4 {
      margin-top: 24.375rem;
    }
  }

  // 600px
  @media (max-width: 37.5rem) {
    > h1 {
      font-size: 2.125rem; // 34px
    }
  }
`

export const Grid = styled.main`
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 2rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`
