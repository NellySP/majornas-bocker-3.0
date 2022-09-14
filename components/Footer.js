import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { sanityClient } from '../lib/sanity';

export default function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'footer'][0]{
          pageBuilder[]{
            heading,
            paragraphs,
            portableText
          }
        }`
      )
      .then((data) => setFooter(data))
      .catch(console.error);
  }, []);

  const footerItems = footer.pageBuilder;
  console.log(footerItems);

  const footerItem1 = footerItems;
  console.log(footerItem1);

  return (
    <footer id='footer'>
      <ul>
        {footerItems &&
          footerItems.map((footerItem) => (
            <li key={footerItem._id}>
              <a>{footer.heading}</a>
            </li>
          ))}
        <li>
          
        </li>
      </ul>
      <p>Hi yes this is indeed an awesome footer</p>
      {/* <p>{heading}</p> */}
    </footer>
  );
}