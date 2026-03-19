import { Container } from "./components/container";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <section>logo</section>
      </Container>

      <Container>
        <section>menu</section>
      </Container>

      <Container>
        <section>formulario</section>
      </Container>

      <Container>
        <section>rodape</section>
      </Container>
    </>
  );
}
