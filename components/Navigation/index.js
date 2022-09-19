import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { sanityClient } from '../../lib/sanity';
import { NavContainer, NavLinkWrapper, NavLogo } from './styles';

export default function Navigation() {
  const [navItems, setNavItems] = useState([]);

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

  // console.log(navItems.nav);
  const links = navItems.nav;

  // const scrollToFooter = (e) => {
  //   let btn = document.querySelector('.scrollToFooter');
  //   let footer = document.querySelector('#footer');

  //   btn.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     footer.scrollIntoView({
  //       behavior: 'smooth',
  //     });
  //   });
  // };

  return (
    <>
      <Head>
        <title>{navItems.title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavContainer>
        <NavLogo href='/'>{navItems.title}</NavLogo>
        <NavLinkWrapper>
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
        </NavLinkWrapper>
      </NavContainer>
    </>
  );
}
