import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Pill = styled.p`
  color: var(--primary-500);
  background-color: var(--primary-100);
  text-align: center;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 50px;
  display: inline-block;
`;

const MainSectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
`;

const SectionSubtitle = styled.h3`
  font-size: 20px;
  line-height: 1.5;
  font-weight: normal;
`;

function SectionTitle(props) {
  return (
    <Wrap>
      <Pill>{props.pill}</Pill>
      <MainSectionTitle>{props.title}</MainSectionTitle>
      <SectionSubtitle>{props.subtitle}</SectionSubtitle>
    </Wrap>
  );
}
export default SectionTitle;
