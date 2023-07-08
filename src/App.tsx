import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global/styles/GlobalStyles'
import { theme } from './global/theme'
import { Home } from './sections/Home'
import { Services } from './sections/Services'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
