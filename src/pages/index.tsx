import { SEO } from "../components/seo";
import { Container } from "../styles/global.style";

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Home" description="Home Page" />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </>
  )
}

export default Home;