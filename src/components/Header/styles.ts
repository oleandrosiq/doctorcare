import { keyframes, styled } from 'styled-components'

type Props = {
  fixedonscroll: string
}

export const Container = styled.header<Props>`
  width: 100%;
  height: 4.5rem; // 72px
  padding: 0 2rem;

  transition: all 0.2s ease;
  position: fixed;
  z-index: 10;

  background-color: ${({ theme, fixedonscroll }) =>
    fixedonscroll === 'true'
      ? theme.colors.primary.green
      : theme.colors.primary.greenLight};
`

export const Wrapper = styled.div<Props>`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;

  nav {
    @media (max-width: 750px) {
      display: none;
    }

    height: 100%;

    ul {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;

      li {
        min-width: 4.375rem;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        a {
          max-width: max-content;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          border: 0.125rem solid transparent;
          text-decoration: none;
          opacity: 0.6;
          color: ${({ theme, fixedonscroll }) =>
            fixedonscroll === 'true'
              ? theme.colors.primary.greenLight2
              : theme.colors.primary.green};

          transition: all 0.2 ease;

          &.active,
          &:hover {
            font-weight: bold;
            opacity: 1;
            border-bottom-color: ${({ theme, fixedonscroll }) =>
              fixedonscroll === 'true'
                ? theme.colors.primary.greenLight2
                : theme.colors.primary.green};
          }
        }
      }
    }
  }

  .button-menu {
    display: none;

    border: 0;
    background-color: transparent;
  }

  @media (max-width: 750px) {
    button.button-outline-light,
    button.button-outline-dark {
      display: none;
    }

    .button-menu {
      display: flex;
    }
  }
`

const AnimationMenu = keyframes`
  from {
    left: -6.25rem;
  }

  to {
    left: 0;
  }
`

export const Menu = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);

  background-color: ${({ theme }) => theme.colors.primary.green};

  position: fixed;
  left: 0;
  top: 4.5rem;

  animation: ${AnimationMenu} 0.2s ease;
  z-index: 1;

  > nav {
    margin-top: 3.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    > a {
      min-height: 2.1875rem;

      color: ${({ theme }) => theme.colors.primary.greenLight2};
      text-align: center;
      font-size: 1.5rem;
      text-decoration: none;
      opacity: 0.6;

      &.active {
        font-weight: 700;
        opacity: 1;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary.beige};
      }

      &:hover {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary.beige};
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary.beige};
        opacity: 1;
      }
    }
  }

  > button {
    margin: 0 auto;
    margin-top: 3rem;
    padding: 10px 24px;

    border: 0;
    border-radius: 40px;
    background: ${({ theme }) => theme.colors.secondary.white};

    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.green};
    text-transform: uppercase;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.white};
      background-color: ${({ theme }) => theme.colors.primary.greenHover};
    }
  }

  .socials {
    margin-top: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > a {
      transition: all 0.2s ease;

      &:hover {
        scale: 1.1;
      }
    }
  }
`
