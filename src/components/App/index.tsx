import { Container, Description, Image, Subscriptions, Title, Link, ButtonImg, LinkContainer } from "./styles";
import logo from '../../assets/Logo.png'
import CTA from '../../assets/CTA.png'


export default function App() {
  return (
    <Container>
      <Image src={logo} alt="Tips Milionárias"/>
      <Title>Tips Milionárias ⚽</Title>
      <Subscriptions>4 171 subscribers</Subscriptions>
      <Description>Aqui você vai ter as melhores analises do Brasil para ganhar todos os dias 💰</Description>
      <LinkContainer>
        <Link href="https://t.me/astipsmilionarias" aria-label="Grupo Tips Milionárias" target="_blank">
          <ButtonImg src={CTA} alt="Botão para Grupo Tips Milionárias" />
        </Link>
      </LinkContainer>
    </Container>
  )
}
