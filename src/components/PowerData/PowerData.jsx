import { Container, Grid, Section } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';
import styled from 'styled-components';

export const H3Title = styled.h3`
  color: #22c55e;
  font-size: 48px;
  margin-bottom: 0px;
`;

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'We believe in the power of data',
    subtitle:
      'Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.',
  },
  gainCards: [
    {
      id: 1,
      title: '235.000',
      descr: 'Projects completed',
    },
    {
      id: 2,
      title: '$10m',
      descr: 'APR',
    },
    {
      id: 3,
      title: '+50.000',
      descr: 'Hours Saved Annually',
    },
    {
      id: 4,
      title: '3.500',
      descr: 'Unique Users',
    },
  ],
};

function PowerData(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill="FEATURES"
          subtitle=" Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels."
          title="We believe in the power of data"
        />
        <div>
          <H3Title>235.00</H3Title>
          <p>Projects completed</p>
        </div>
      </Container>
    </Section>
  );
}
export default PowerData;
