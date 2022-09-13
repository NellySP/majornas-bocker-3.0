import { GrHome } from 'react-icons/gr';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'newsPage',
  title: 'Händelser i butiken',
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
      title: 'Sectioner för nyhets-sidan',
      type: 'array',
      of: [
        { type: 'newsHero' }, // hero.js (same applies for the other types)
        { type: 'singleNews' },
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
