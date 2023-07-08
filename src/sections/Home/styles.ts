import { styled } from 'styled-components'
import { pixelToRem } from '../../utils/functions/pixelToRem'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.greenLight};
  padding: 0 2rem;
  padding-bottom: 11.875rem;
`

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 4.5rem;
  position: relative;
`

export const Main = styled.main`
  width: 100%;
  position: relative;
  padding-top: 5rem;

  // 980px
  @media (max-width: 61.25rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    button {
      margin: 0 auto;
    }

    > img {
      margin-top: 60px;
    }
  }

  .info {
    width: max-content;

    span {
      color: ${({ theme }) => theme.colors.primary.green};
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: 1.12px;
      text-transform: uppercase;
    }

    h1 {
      color: ${({ theme }) => theme.colors.secondary.grayHeadline};
      font-size: 3.25rem; // 52px
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      margin-top: 1rem;
    }

    p {
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.colors.secondary.grayParagraph};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    button {
      margin-top: 3.125rem;
      padding: 0.625rem 1.5rem;
      gap: 1rem;

      border: 0;
      border-radius: 40px;
      background: ${({ theme }) => theme.colors.primary.green};

      font-size: 0.875rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.secondary.white};
      text-transform: uppercase;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary.greenHover};
      }
    }

    // 660px
    @media (max-width: 41.25rem) {
      width: 100%;

      > h1 {
        font-size: 2.125rem; // 34px
      }

      > p {
        > br {
          display: none;
        }
      }
    }
  }

  > img {
    position: absolute;
    right: 10px;
    bottom: -8.125rem;

    // 980px
    @media (max-width: 61.25rem) {
      position: unset;
      right: unset;
      bottom: unset;
    }

    @media (max-width: 28.125rem) {
      width: 98%;
    }
  }
`

export const Numbers = styled.div`
  width: 100%;
  max-width: 100vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -300px;

  &.mobile {
    display: none;
  }

  &.desktop {
    display: unset;
  }

  > div {
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => pixelToRem(theme.maxWidthPage)};

    border: 1px solid ${({ theme }) => theme.colors.primary.greenLight};
    background-color: ${({ theme }) => theme.colors.primary.beige};
    border-radius: 6px;

    padding: 3.75rem 7.5rem;

    > div {
      max-width: 50rem; // 800px
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin: 0 auto;

      .divider {
        width: 0.0625rem;
        height: 83px;
        opacity: 0.5;
        background-color: ${({ theme }) => theme.colors.primary.green};
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > h2 {
          font-size: 3rem;
          color: ${({ theme }) => theme.colors.secondary.grayHeadline};
          font-weight: 700;
          line-height: 130%;
        }

        > p {
          color: ${({ theme }) => theme.colors.primary.green};
          font-size: 1rem;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
  }

  // 980px
  @media (max-width: 61.25rem) {
    &.mobile {
      display: unset;
      padding: 0;
    }

    &.desktop {
      display: none;
    }
    bottom: -11.25rem; // 180px

    > div {
      padding: 3.75rem;
    }
  }

  // 830px
  @media (max-width: 51.875rem) {
    bottom: -30rem; // 480px

    > div {
      > div {
        flex-direction: column;
        gap: 3.75rem;

        .divider {
          display: none;
        }
      }
    }
  }
`
