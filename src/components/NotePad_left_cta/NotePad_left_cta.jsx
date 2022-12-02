import { Container, Grid, Section, Btn } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';
import styled from 'styled-components';
import notepad from '../../IMG/notebook.png';
import Insight from '../Insight/Insight';

const GridFor2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
`;

const Cta = styled.div`
  padding-top: 50px;
`;

function NotePad_left_cta(props) {
  return (
    <Container>
      <GridFor2>
        <img src={notepad} alt="NotePad" />
        <Cta>
          <Insight hFontSize="50px" />
          <Btn>Get Started</Btn>
        </Cta>
      </GridFor2>
    </Container>
  );
}
export default NotePad_left_cta;
