import { GrHome } from 'react-icons/gr';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'homePage',
  title: 'Hem',
  type: 'document',
  icon: GrHome,
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
      title: 'Sectioner för startsidan',
      type: 'array',
      of: [
        { type: 'hero' }, // hero.js (same applies for the other types)
        { type: 'calendar' },
        { type: 'about' },
        { type: 'news' },
        // { type: 'form' },
        // { type: 'video' },
        // etc...
      ],
    },
  ],
};
