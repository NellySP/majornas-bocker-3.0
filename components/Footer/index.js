import React, { useState, useEffect } from 'react';
import { FooterContainer } from './styles';

import { sanityClient } from '../../lib/sanity';

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
  // console.log(footerItems);

  return (
    <FooterContainer id='footer'>
      <div>
        {footerItems &&
          footerItems.map((footerItem) => (
            <div key={footerItem._id}>
              <ul className="footerItemHeading">{footerItem.heading}</ul>

              { footerItem.portableText.map( (paragraph) => {
                
                const link = paragraph.markDefs[0];

                if (link) {
                  return (
                    <div key={paragraph._id}>
                  <li className="footerItemParagraph">
                    <a href={link.href}>
                    {paragraph.children[0].text}
                    </a>
                  </li>
                  </div>
                  )
                }
                else {
                  return (
                    <div key={paragraph._id}>
                  <li className="footerItemParagraph">
                    {paragraph.children[0].text}
                  </li>
                  </div>
                  )
                }
                
              })}

            </div>
          ))}
      </div>

    </FooterContainer>
  );
}