import packageJson from '$/../../package.json';

import { Container } from './styles';

const Home = () => (
  <Container>
    <h1>{packageJson.name} 🎺</h1>
  </Container>
);

export default Home;
