import { BsPeople } from 'react-icons/bs';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'aboutPage',
  title: 'Om oss',
  type: 'document',
  icon: BsPeople,
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL-ändelse',
      description: 'Ändelse för sidan som syns i webbläsarens adressfält',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner för om oss-sidan',
      description: 'Denna sida har två sektioner: generell information och ett galleri av bilder. Redigera dem genom att klicka på dem nedan.',
      type: 'array',
      of: [
        { type: 'aboutHero' },
        { type: 'aboutGallery' },
      ],
    },
  ],
};
