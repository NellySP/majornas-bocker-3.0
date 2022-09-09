// 01. npm install next-sanity @portabletext/react @sanity/image-url
// 02. Add imports, config and exports
// 03. Go to: https://www.sanity.io/manage and add a new CORS Origin to http://localhost:3000 (Letting sanity know that localhost:3000 can make request to our content lake.)
// 04. REMINDER! When deploying you need to add a new CORS Origin with a deployed URL.
import React from 'react';
import { createClient, createPreviewSubscriptionHook } from 'next-sanity';

// createImageUrlBuilder and createPortableTextCompoment is removed from 'next-sanity' check link below
// https://github.com/sanity-io/next-sanity#createportabletextcomponent-is-removed
import createImageUrlBuilder from '@sanity/image-url';
import { PortableText as PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: 'ajzty4tn',
  dataset: 'production',
  apiVersion: '2021-03-25', // https://www.sanity.io/docs/api-versioning use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = () => (
  <PortableTextComponent components={{}} {...config} />
);
