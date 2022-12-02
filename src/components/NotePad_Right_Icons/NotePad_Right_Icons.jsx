import { Container, Grid, Section, Btn } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';
import styled from 'styled-components';
import notepad from '../../IMG/notebook.png';
import Insight from '../Insight/Insight';
import SingleIconCardLeft from './SingleIconCardLeft';

const GridFor2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
`;

const Cta = styled.div`
  padding-top: 50px;
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
`;

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
  gainCards: [
    {
      id: 1,
      icon: 'envelope',
      title: 'Measure your performance',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 2,
      icon: 'facebook',
      title: 'Custom analytics',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 3,
      icon: 'instagram',
      title: 'Team Management',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
  ],
};

function NotePad_Right_cta(props) {
  return (
    <Container>
      <GridFor2>
        <IconBox>
          {sectionData.gainCards.map((gObj) => (
            <SingleIconCardLeft
              key={gObj.id}
              icon={gObj.icon}
              title={gObj.title}
              text={gObj.descr}
            />
          ))}
        </IconBox>
        <img src={notepad} alt="NotePad" />
      </GridFor2>
    </Container>
  );
}
export default NotePad_Right_cta;
