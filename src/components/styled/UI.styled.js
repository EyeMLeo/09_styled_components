import styled from 'styled-components';

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 16px;
`;

export const CardText = styled.p`
  color: gray;
`;

export const Pill = styled.p`
  color: var(--primary-500);
  background-color: var(--primary-100);
  text-align: center;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 50px;
  display: inline-block;
`;

// susikuri Section styled componenta
export const Section = styled.section`
  padding-top: 6%;
  padding-bottom: 5%;
`;
// susikuri Container styled componenta
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;
// susikuri Grid componenta

// jei gaunam propsa pavadinimu cols, tai tai bus kiek stulpeliu
// kitu atveju 3
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || '3'}, 1fr);
  gap: 1rem;
  list-style: none;
  padding-left: 0;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
// Susikurti SingleCard componenta naudojan styled components

// Icon
// nustatem papildomus atributus priklausancius nuo props
export const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
  ariaHidden: true,
}))`
  font-size: 24px;
  width: 64px;
  height: 64px;
  background-color: var(--primary-500);
  color: #fff;
  display: inline-block;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

// buttto type submit

// defaut attributes using attrs
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  font-size: 2rem;
`;

// Sukurti Flex styled komponent
// kuris isdelioja elementus kaip pavyzdyje

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${(props) => (props.gap ? '24px' : 0)};
  @media screen and (max-width: 1000px) {
    flex-direction: ${(props) => (props.responsive ? 'column' : 'row')};
    row-gap: ${(props) => (props.responsive ? '1.5rem' : '0')};
  }
`;

export const Btn = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  background-color: ${(props) =>
    props.secondary ? '#d5dae1' : 'var(--primary-500)'};
  color: ${(props) => (props.secondary ? '#333f51' : '#fff')};
  padding: 14px 28px;
  display: inline-block;
  border-radius: 6px;
  border: none;
`;

// sukurti SecondaryBtn kuris paveldi visas Btn savybes
export const SecondaryBtn = styled(Btn)`
  background-color: #fff;
  color: #333f51;
`;
// perasom bg spalva ir color, kad atrodytu kaip pavyzdyje
