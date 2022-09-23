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
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'pageBuilder',
      title: 'Sectioner för om oss-sidan',
      type: 'array',
      of: [
        { type: 'aboutHero' }, // hero.js (same applies for the other types)
        { type: 'aboutGallery' },
        // { type: 'calendar' },
        // { type: 'about' },
        // { type: 'news' },
        // { type: 'form' },
        // { type: 'video' },
        // etc...
      ],
    },
  ],
};
