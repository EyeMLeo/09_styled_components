import styled from 'styled-components';
import './App.css';

// sukriam h1 elementa pavadinimu Title naudodami styled components

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

const Section = styled.section`
  background-color: gray;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h3`
  font-weight: normal;
  font-size: 3rem;
  color: darkmagenta;
`;

// sukurti Button komponenta, prideti jam stiliaus
// panaudoti jsx

function App() {
  return (
    <div className="App">
      <Title>React styled components</Title>
      <Section>
        <SectionTitle>Title here</SectionTitle>
        <Container>
          <Title>more title</Title>
          <Title>more title</Title>
          <Title>more title</Title>
        </Container>
      </Section>
    </div>
  );
}

export default App;
