import { CheckSVG } from '../../../../assets/Check'
import { Container } from './styles'

type Props = {
  title: string
  description: string
}

export function Service({ title, description }: Props) {
  return (
    <Container>
      <CheckSVG />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}
