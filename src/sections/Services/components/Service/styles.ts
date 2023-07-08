import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 350px;
  min-width: 290px;
  padding: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary.greenLight};
  background: #fff;

  > h1 {
    color: ${({ theme }) => theme.colors.secondary.grayHeadline};
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
  }

  > p {
    color: ${({ theme }) => theme.colors.secondary.grayParagraph};
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
  }
`
