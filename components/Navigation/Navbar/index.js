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
  console.log(navItems?.seo?.socialImage);
  const socialImage = navItems?.seo?.socialImage;

  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>{navItems?.seo?.title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='title' content={navItems?.seo?.title} />
        <meta name='description' content={navItems.seo?.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={navItems?.seo?.url} />
        <meta property='og:title' content={navItems?.seo?.title} />
        <meta property='og:description' content={navItems.seo?.description} />
        {socialImage && (
          <meta property='og:image' content={urlFor(socialImage).url()} />
        )}

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={navItems?.seo?.url} />
        <meta property='twitter:title' content={navItems?.seo?.title} />
        <meta
          property='twitter:description'
          content={navItems.seo?.description}
        />
        {socialImage && (
          <meta property='twitter:image' content={urlFor(socialImage).url()} />
        )}
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
