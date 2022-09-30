import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../../../lib/sanity';
import HamburgerMenu from '../HamburgerMenu';
import { NavContainer, NavLinkWrapperDesktop, NavLogo } from './styles';

export default function Navigation() {
  const [navItems, setNavItems] = useState([]);

  const fetchData = async (configQuery) => {
    try {
      const data = await sanityClient.fetch(configQuery);
      if (data) {
        setNavItems(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const configQuery = `
    *[_type == "siteConfig"][0]{
      seo,
      logotype,
      nav[]->{ 
        _id,
        slug,
        title,
      }
    }
    `;
    fetchData(configQuery);
  }, []);

  const links = navItems.nav;

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
      </Head>
      <HamburgerMenu />
      <NavContainer>
        <NavLogo href='/'>{navItems.logotype}</NavLogo>
        <NavLinkWrapperDesktop>
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
        </NavLinkWrapperDesktop>
      </NavContainer>
    </>
  );
}
