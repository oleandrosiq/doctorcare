import { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

import { Logo } from '../../assets/Logo'
import { InstagramSVG } from '../../assets/Instagram'
import { FacebookSVG } from '../../assets/Facebook'
import { YoutubeSVG } from '../../assets/Youtube'
import { MenuSVG } from '../../assets/Menu'

import { Container, Wrapper, Menu } from './styles'

export function Header() {
  const theme = useTheme()
  const [fixedOnScroll, setFixedOnScroll] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function toggleMenu() {
    setIsOpenMenu((state) => !state)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setFixedOnScroll(true)
      } else {
        setFixedOnScroll(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {isOpenMenu && (
        <Menu>
          <nav>
            <a href="/" className="active">
              Início
            </a>
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#contact">Contato</a>
          </nav>

          <button type="button">Agende sua consulta</button>

          <div className="socials">
            <a href="/" onClick={toggleMenu}>
              <InstagramSVG />
            </a>
            <a href="/" onClick={toggleMenu}>
              <FacebookSVG />
            </a>
            <a href="/" onClick={toggleMenu}>
              <YoutubeSVG />
            </a>
          </div>
        </Menu>
      )}
      <Container fixedonscroll={String(fixedOnScroll || isOpenMenu)}>
        <Wrapper
          className="maxWidthPage"
          fixedonscroll={String(fixedOnScroll || isOpenMenu)}
        >
          <Logo
            primaryColor={
              fixedOnScroll || isOpenMenu
                ? theme.colors.secondary.white
                : undefined
            }
            secondaryColor={
              fixedOnScroll || isOpenMenu
                ? theme.colors.secondary.white
                : undefined
            }
          />

          <nav>
            <ul>
              <li>
                <a href="/" className="active">
                  Início
                </a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={
              fixedOnScroll || isOpenMenu
                ? 'button-outline-light'
                : 'button-outline-dark'
            }
          >
            Agendar consulta
          </button>

          <button type="button" className="button-menu" onClick={toggleMenu}>
            <MenuSVG
              color={
                fixedOnScroll || isOpenMenu
                  ? undefined
                  : theme.colors.primary.green
              }
            />
          </button>
        </Wrapper>
      </Container>
    </>
  )
}
