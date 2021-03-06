import React, {useContext} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import HamburgMenu from 'common/components/HamburgMenu';
import Container from 'common/components/UI/Container';
import {DrawerContext} from 'common/contexts/DrawerContext';

import {MENU_ITEMS} from 'common/data/SaasModern';
import ScrollSpyMenu from 'common/components/ScrollSpyMenu';

import LogoImage from 'common/assets/image/signum-logo-white.png';
import LogoImageAlt from 'common/assets/image/signum-logo-black.png';
import styled from "styled-components";
import NextImage from "../../../common/components/NextImage";
import SantaHatImage from "../../../common/assets/image/promo/santa-hat.png";

const LogoWithImageWrapper = styled.div`
  position: relative;
`

const SantaHatContainer = styled.div`
  position: absolute;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
`

const Navbar = ({navbarStyle, logoStyle, button, row, menuWrapper}) => {
  const {state, dispatch} = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <LogoWithImageWrapper>
            <SantaHatContainer>
              <NextImage src={SantaHatImage} alt="Santas Hat"/>
            </SantaHatContainer>
            <Logo
              href="https://signum.network"
              logoSrc={LogoImage}
              title="Signum Logo"
              logoStyle={logoStyle}
              className="main-logo"
            >
            </Logo>
            <Logo
              href="#"
              logoSrc={LogoImageAlt}
              title="Signum Logo"
              logoStyle={logoStyle}
              className="logo-alt"
            />
          </LogoWithImageWrapper>
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={MENU_ITEMS}
              offset={-70}
            />
            {/*<Link href="#">*/}
            {/*  <a className="navbar_button">*/}
            {/*    <Button {...button} title="GET STARTED" />*/}
            {/*  </a>*/}
            {/*</Link>*/}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff"/>}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />
              {/*<Link href="#">*/}
              {/*  <a className="navbar_drawer_button">*/}
              {/*    <Button {...button} title="GET STARTED" />*/}
              {/*  </a>*/}
              {/*</Link>*/}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
    height: '40px',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
