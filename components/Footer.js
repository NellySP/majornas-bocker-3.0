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

  const footerItem1 = footerItems[0];
  console.log(footerItem1);


  return (
    <footer id='footer'>
      <p>Hi yes this is indeed an awesome footer</p>
      {/* <p>{heading}</p> */}
    </footer>
  );
}


// export async function getStaticProps() {
//   const footer = await sanityClient.fetch(footerQuery);

//   return { props: { footer } };
// }