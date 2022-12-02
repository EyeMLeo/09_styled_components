import styled from 'styled-components';
import { Icon, CardTitle, CardText } from '../styled/UI.styled';

const IconLeftDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

function SingleIconCardLeft(props) {
  return (
    <IconLeftDiv>
      <Icon icon={props.icon} />
      <div>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
      </div>
    </IconLeftDiv>
  );
}
export default SingleIconCardLeft;
