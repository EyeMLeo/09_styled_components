import { Container, Grid, Section } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';
import styled from 'styled-components';

const H3Title = styled.h3`
  color: #22c55e;
  font-size: 48px;
  margin-bottom: 0px;
`;

const OneCard = styled.div`
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title:
      'Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.',
    subtitle: 'We believe in the power of data',
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

function SingleCard(props) {
  return (
    <OneCard>
      <H3Title>{props.title}</H3Title>
      <p>{props.text}</p>
    </OneCard>
  );
}

function PowerData(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.title}
          title={sectionData.sectionTitle.subtitle}
        />
        {/* <div>
          <H3Title>235.00</H3Title>
          <p>Projects completed</p>
        </div> */}

        <CardGrid>
          {/* mapinti sectionData.gainCards ir gaminti SingleCard elementus */}
          {sectionData.gainCards.map((gObj) => (
            <SingleCard key={gObj.id} title={gObj.title} text={gObj.descr} />
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
}
export default PowerData;
