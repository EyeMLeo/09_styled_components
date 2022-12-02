// sukriam h1 elementa pavadinimu Title naudodami styled components

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  text-decoration: underline;
`;

// sukurti Button komponenta, prideti jam stiliaus
// panaudoti jsx
const Button = styled.button`
  padding: 0.6em 1.2em;
  background-color: transparent;
  font-size: ${(props) => (props.sm ? '0.9rem' : '1.5rem')};
  transition: all 0.2s ease-out;
  display: inline-block;
  &:hover {
    background-color: coral;
    color: white;
  }
`;

// LargeButton, paveldi viska is Button, perrasom ka mums reikia
const LargeButton = styled(Button)`
  padding: 0.9em 1.8em;
  text-transform: uppercase;
`;
