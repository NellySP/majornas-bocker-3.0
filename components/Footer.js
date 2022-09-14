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
      <div>
        {footerItems &&
          footerItems.map((footerItem) => (
            <div key={footerItem._id}>
              <ul className="footerItemHeading">{footerItem.heading}</ul>
                {/* <li>{footerItem.portableText[0].children[0].text}</li> */}
                {/* <li>{footerItem.portableText[0].children[1].text}</li> */}
                
              { footerItem.portableText[0].children.map( (paragraph) => {
                
                return (
                  paragraph && 
                  <li>{paragraph.text}</li>
                )
                
              })}


              {console.log(footerItem.portableText)}
              
              {/* {console.log(footerItem.portableText[0].children[0].text)} */}

            </div>
          ))}
      </div>
      <p>Hi yes this is indeed an awesome footer</p>
      {/* <p>{heading}</p> */}
    </footer>
  );
}