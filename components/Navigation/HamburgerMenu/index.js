import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { device } from '../../../styles/mediaQueries';
import { useState, useEffect } from 'react';
import { sanityClient } from '../../../lib/sanity';
import {
  NavContainer,
  MenuTrigger,
  MenuLinks,
  NavLogo,
  MenuImage,
} from './styles';

export default function HamburgerMenu() {
  const [navItems, setNavItems] = useState([]);
  const [nav, showNav] = useState(false);
  const [menuText, setMenuText] = useState('Meny');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "siteConfig"][0]{
            title,
          nav[]->{ 
            _id,
            slug,
            title
          }
        }`
      )
      .then((data) => setNavItems(data))
      .catch(console.error);
  }, []);

  const links = navItems.nav;

  return (
    <>
      <NavContainer>
        <NavLogo href='/'>{navItems.title}</NavLogo>
        <MenuTrigger onClick={() => showNav(!nav) && setMenuText('Stäng')}>
          {menuText}
        </MenuTrigger>
      </NavContainer>
      <MenuLinks nav={nav}>
        <ul>
          {links &&
            links.map((link) => (
              <li key={link._id}>
                <Link href={link.slug.current}>
                  <a onClick={() => showNav(!nav)}>{link.title}</a>
                </Link>
              </li>
            ))}
          <li>
            <a
              onClick={() => showNav(!nav)}
              href='#footer'
              className='scrollToFooter'
            >
              Kontakta oss
            </a>
          </li>
        </ul>
        <MenuImage
          src='/images/form-1-orange.svg'
          alt='orange graphic image with a circle'
        />
      </MenuLinks>
      {/* <MenuToggle open={open} onClick={() => setOpen(!open)} href='#'>
        Meny
      </MenuToggle>
      <MobileNavContainer>
        <NavLinkWrapperMobile>
          {links &&
            links.map((link) => (
              <li key={link._id}>
                <Link href={link.slug.current}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          <li>
            <a href='#footer' className='scrollToFooter'>
              Kontakta oss
            </a>
          </li>
        </NavLinkWrapperMobile>
        <MenuImage
          src='/images/form-1-orange.svg'
          alt='orange graphic image with a circle'
        />
      </MobileNavContainer> */}
    </>
  );
}
