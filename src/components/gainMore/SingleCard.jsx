import { Icon } from '../styled/UI.styled';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  text-align: center;
  i {
    margin-bottom: 24px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 16px;
`;

const CardText = styled.p`
  color: gray;
`;

function SingleCard(props) {
  return (
    <CardGrid>
      <Icon icon={props.icon} />
      <CardTitle>{props.title}</CardTitle>
      <CardText>{props.text}</CardText>
    </CardGrid>
  );
}
export default SingleCard;
