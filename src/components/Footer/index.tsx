import { useTheme } from 'styled-components'
import { FacebookSVG } from '../../assets/Facebook'
import { InstagramSVG } from '../../assets/Instagram'
import { Logo } from '../../assets/Logo'
import { YoutubeSVG } from '../../assets/Youtube'
import { Container, Wrapper } from './styles'

export function Footer() {
  const theme = useTheme()

  return (
    <Container>
      <Wrapper className="maxWidthPage">
        <div className="info">
          <Logo
            primaryColor={theme.colors.secondary.white}
            secondaryColor={theme.colors.secondary.white}
          />
          <p>©2022 - DoctorCare.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="socials">
          <a href="">
            <InstagramSVG />
          </a>
          <a href="">
            <FacebookSVG />
          </a>
          <a href="">
            <YoutubeSVG />
          </a>
        </div>
      </Wrapper>
    </Container>
  )
}
