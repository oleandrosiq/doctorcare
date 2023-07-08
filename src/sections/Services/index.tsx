import { Service } from './components/Service'
import { Container, Grid } from './styles'

export function Services() {
  return (
    <Container>
      <h4>Serviços</h4>

      <h1>
        Como podemos ajudá-lo <br /> a se sentir melhor?
      </h1>

      <div className="maxWidthPage" style={{ width: '100%' }}>
        <Grid>
          <Service
            title="Problemas digestivos"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Service
            title="Saúde Hormonal"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Service
            title="Bem-estar mental"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Service
            title="Cuidados Pediátricos"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Service
            title="Autoimune e Inflamação"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
          <Service
            title="Saúde do Coração"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
          />
        </Grid>
      </div>
    </Container>
  )
}
