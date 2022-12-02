import styled from 'styled-components';
import { Container, Btn, SecondaryBtn } from './../styled/UI.styled';
import logoImg from '../../IMG/Logo.png';

const NavBars = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  i {
    display: none;
  }
  @media screen and (max-width: 800px) {
    order: 2;
    i {
      display: grid;
      place-items: center;
    }
    a {
      display: none;
    }
  }
`;

const NavLiItem = styled.a`
  margin: 15px;
`;

const ContainerFlex = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 420px) {
    li {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

function Nav(props) {
  return (
    <ContainerFlex>
      <img src={logoImg} alt="Logo" />
      <NavBars>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <NavLiItem>
          <a href="">Product</a>
        </NavLiItem>
        <NavLiItem>
          <a href="">Features</a>
        </NavLiItem>
        <NavLiItem>
          <a href="">Pricing</a>
        </NavLiItem>
        <NavLiItem>
          <a href="">Resources</a>
        </NavLiItem>
      </NavBars>
      <div>
        <SecondaryBtn>Log In</SecondaryBtn>
        <Btn>Sign Up</Btn>
      </div>
    </ContainerFlex>
  );
}
export default Nav;
