import DoctorHoldingImg from '../../assets/doctor-holding.png'
import { Container, Wrapper } from './styles'

export function About() {
  return (
    <Container id="about">
      <Wrapper className="maxWidthPage">
        <img
          src={DoctorHoldingImg}
          alt="Doutor e pacientes felizes fazendo uma consulta"
        />

        <div>
          <h4>SOBRE NÓS</h4>
          <h1>
            Entenda quem somos <br /> e por que existimos
          </h1>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </Wrapper>
    </Container>
  )
}
