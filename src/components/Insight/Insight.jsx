import styled from 'styled-components';
import { CardTitle, Container, CardText, Pill } from './../styled/UI.styled';
import SectionTitle from './../UI/sectionTitle/SectionTitle';

function Insight(props) {
  return (
    <Container>
      <Pill>Features</Pill>
      <CardTitle>Gain more insight into how people use your</CardTitle>
      <CardText>
        With our integrated CRM, project management, collaboration and invoicing
        capabilities, you can manage every aspect of your business in one secure
        platform.
      </CardText>
    </Container>
  );
}
export default Insight;
