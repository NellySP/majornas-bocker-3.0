import { GrHome } from 'react-icons/gr';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: GrHome,
  fields: [
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
