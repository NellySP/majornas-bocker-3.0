import React, { useState, useEffect } from "react";
import {
  FooterContainer,
  FooterHeading,
  FooterItem,
  FooterList,
  FooterListItems,
  FooterListItem,
  FooterListItemLink,
} from "./styles";

import { sanityClient } from "../../lib/sanity";

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

  return (
    <FooterContainer id="footer">
      {footerItems &&
        footerItems.map((footerItem) => (
          <FooterItem key={footerItem._id}>
            <FooterHeading>{footerItem.heading}</FooterHeading>
            <FooterList>
              {footerItem.portableText.map((paragraph) => {
                const link = paragraph.markDefs[0];

                if (link) {
                  return (
                    <FooterListItems key={paragraph._id}>
                      <FooterListItem>
                        <a href={link.href} target="_blank" rel="noreferrer">{paragraph.children[0].text}</a>
                      </FooterListItem>
                    </FooterListItems>
                  );
                } else {
                  return (
                    <FooterListItems key={paragraph._id}>
                      <FooterListItem>
                        {paragraph.children[0].text}
                      </FooterListItem>
                    </FooterListItems>
                  );
                }
              })}
            </FooterList>
          </FooterItem>
        ))}
    </FooterContainer>
  );
}
