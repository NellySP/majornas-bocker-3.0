import { AiOutlineCalendar } from 'react-icons/ai';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'calendarPage',
  title: 'Kalender',
  type: 'document',
  icon: AiOutlineCalendar,
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
