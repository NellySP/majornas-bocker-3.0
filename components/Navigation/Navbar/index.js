import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { sanityClient, urlFor } from '../../../lib/sanity';
import HamburgerMenu from '../HamburgerMenu';
import { NavContainer, NavLinkWrapperDesktop, NavLogo } from './styles';

export default function Navigation() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "siteConfig"][0]{
          seo,
          logotype,
          nav[]->{ 
            _id,
            slug,
            title,
          }
        }`
      )
      .then((data) => setNavItems(data))
      .catch(console.error);
  }, []);

  const links = navItems.nav;
  console.log(navItems.seo);

  return (
    <>
      <Head>
        <title>{navItems.seo?.title}</title>
        <meta name='description' content={navItems.seo?.description} />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content={navItems.seo?.title} />
        <meta property='og:url' content={navItems.seo?.url} />
        <meta
          property='og:image'
          content={urlFor(navItems.seo?.socialImage).url()}
        />
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
