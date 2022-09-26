import { GrHome } from 'react-icons/gr';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'homePage',
  title: 'Startsida',
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
      description: 'Ska lämnas så här. Här är ingen ändelse i webbläsaren eftersom detta är startsidan.',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner på startsidan',
      description: 'Nedan syns alla sektioner/undersidor som visas på startsidan.',
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
