import { HiOutlineNewspaper } from 'react-icons/hi';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'newsPage',
  title: 'Händelser i butiken',
  type: 'document',
  icon: HiOutlineNewspaper,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Ändelse för hur sidan ses i browsern.',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner på undersidan',
      description: 'Nedan syns kommande händelser. Klicka på "Add item" för att skapa en ny händese. För att ta bort händelse klicka på de tre prickarna till höger om valt block.',
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
