import { styled } from 'styled-components'

export const Container = styled.footer`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary.green};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    p {
      color: ${({ theme }) => theme.colors.primary.beige};
      font-size: 0.875rem;
      font-weight: 400;
    }

    :nth-child(2) {
      margin-top: 1.5rem;
      margin-bottom: 0.9375rem;
    }
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  // 500px
  @media (max-width: 31.25rem) {
    align-items: flex-start;
    flex-direction: column;

    .socials {
      margin-top: 2rem;
    }
  }
`
