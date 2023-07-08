import { createGlobalStyle } from 'styled-components'
import { pixelToRem } from '../../utils/functions/pixelToRem'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color, background-color 0.2s ease;
    cursor: pointer;

    &:focus {
      outline: auto;
      outline-color: ${({ theme }) => theme.colors.primary.greenLight2};
    }
  }

  .maxWidthPage { 
    max-width: ${({ theme }) => pixelToRem(theme.maxWidthPage)};
    margin: 0 auto;
  }

  .button-outline-light, .button-outline-dark {
    padding: 10px 24px;
    border-radius: 2.5rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.secondary.white};
    color: ${({ theme }) => theme.colors.secondary.white};

    font-size: 0.875rem; // 14px
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.greenHover};
      background-color: ${({ theme }) => theme.colors.primary.greenHover};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colors.primary.greenLight};
    }
  }

  .button-outline-dark {
    border-color: ${({ theme }) => theme.colors.primary.green};
    color: ${({ theme }) => theme.colors.primary.green};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary.white};
    }
  }

  // 450px
  @media (max-width: 28.125rem) {
    h1 {
      font-size: 1.75rem !important; // 28px
    }
  }
`
