import { FaBeer } from 'react-icons/fa';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: FaBeer,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner för footern',
      type: 'array',
      of: [
        { type: 'footerItem' }, // hero.js (same applies for the other types)
      ],
    },
  ],
};
