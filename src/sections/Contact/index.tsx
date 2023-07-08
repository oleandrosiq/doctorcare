import { MailSVG } from '../../assets/Mail'
import { PinSVG } from '../../assets/Pin'
import { WhatsAppSVG } from '../../assets/Whats'
import HeroContactImg from '../../assets/contact-hero.png'
import { Container, Wrapper } from './styles'

export function Contact() {
  return (
    <Container>
      <Wrapper className="maxWidthPage">
        <div>
          <h1>
            Entre em contato <br /> com a gente!
          </h1>

          <div className="row">
            <PinSVG />
            <p>R. Amauri Souza, 346</p>
          </div>

          <div className="row">
            <MailSVG />
            <p>contato@beautysalon.com</p>
          </div>

          <button type="button">
            <WhatsAppSVG />
            Agende sua consulta
          </button>
        </div>
        <img
          src={HeroContactImg}
          alt="Homem sentado em uma poltrona, ele está feliz e mexendo no celular."
        />
      </Wrapper>
    </Container>
  )
}
