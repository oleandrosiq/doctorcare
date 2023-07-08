import { WhatsAppSVG } from '../../assets/Whats'
import HeroImg from '../../assets/hero.png'
import { Header } from '../../components/Header'
import { Container, Main, Wrapper, Numbers } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Wrapper className="maxWidthPage">
          <Main>
            <div className="info">
              <span>BOAS-VINDAS A DOCTORCARE 👋</span>
              <h1>
                Assistência médica <br /> simplificada para todos
              </h1>

              <p>
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa <br />
                raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>

              <button type="button">
                <WhatsAppSVG />
                Agende sua consulta
              </button>
            </div>

            <img src={HeroImg} alt="" />
            <Numbers className="mobile">
              <div>
                <div>
                  <span>
                    <h2>+3.500</h2>
                    <p>Pacientes atendidos</p>
                  </span>
                  <div className="divider" />
                  <span>
                    <h2>+15</h2>
                    <p>Especialistas disponíveis</p>
                  </span>
                  <div className="divider" />
                  <span>
                    <h2>+10</h2>
                    <p>Anos no mercado</p>
                  </span>
                </div>
              </div>
            </Numbers>
          </Main>

          <Numbers className="desktop">
            <div>
              <div>
                <span>
                  <h2>+3.500</h2>
                  <p>Pacientes atendidos</p>
                </span>
                <div className="divider" />
                <span>
                  <h2>+15</h2>
                  <p>Especialistas disponíveis</p>
                </span>
                <div className="divider" />
                <span>
                  <h2>+10</h2>
                  <p>Anos no mercado</p>
                </span>
              </div>
            </div>
          </Numbers>
        </Wrapper>
      </Container>
    </>
  )
}
