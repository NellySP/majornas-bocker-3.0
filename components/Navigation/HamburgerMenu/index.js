import Link from 'next/link';
import { useState, useEffect } from 'react';
import { sanityClient } from '../../../lib/sanity';
import {
  Overlay,
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

  const toggleMenu = () => {
    showNav(!nav);
    setMenuText(!nav ? 'Stäng' : 'Meny');
  };

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
        <MenuTrigger onClick={() => toggleMenu()}>{menuText}</MenuTrigger>
      </NavContainer>
      <MenuLinks nav={nav}>
        <ul>
          {links &&
            links.map((link) => (
              <li key={link._id}>
                <Link href={link.slug.current}>
                  <a onClick={() => toggleMenu()}>{link.title}</a>
                </Link>
              </li>
            ))}
          <li>
            <a
              onClick={() => toggleMenu()}
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
      {nav ? (
        <Overlay onClick={() => toggleMenu()} transparent></Overlay>
      ) : (
        <Overlay></Overlay>
      )}
    </>
  );
}
