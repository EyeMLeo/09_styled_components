import Insight from '../Insight/Insight';
import { Container, Grid, Section } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';
import SingleCard from './SingleCard';

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
    {
      id: 4,
      icon: 'home',
      title: 'Build your website',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 5,
      icon: 'envelope',
      title: 'Connect multiple apps',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 6,
      icon: 'envelope',
      title: 'Easy setup',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
  ],
};

function GainMore(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
        <Grid cols="3">
          {/* mapinti sectionData.gainCards ir gaminti SingleCard elementus */}
          {sectionData.gainCards.map((gObj) => (
            <SingleCard
              key={gObj.id}
              icon={gObj.icon}
              title={gObj.title}
              text={gObj.descr}
            />
          ))}
        </Grid>
      </Container>
      <Insight />
    </Section>
  );
}
export default GainMore;
