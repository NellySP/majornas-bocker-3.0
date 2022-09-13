import { GrHome } from 'react-icons/gr';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'calendarPage',
  title: 'Kalender',
  type: 'document',
  icon: GrHome,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pageBuilder',
      title: 'Kalender för saker som händer',
      type: 'array',
      of: [
        { type: 'calendarHero' }, // hero.js (same applies for the other types)
        { type: 'calendarPost' },
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
