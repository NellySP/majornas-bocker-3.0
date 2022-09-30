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
      name: 'newsHero',
      title: 'Generell info på sidan',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Sidorubrik',
          description: 'Rubrik sidan: Händelser i butiken',
          type: 'string',
        },
        {
          name: 'heroDescription',
          title: 'Sidobeskrivning',
          description:
            'Kort beskrivning som kort förklarar vad sidan handlar om.',
          type: 'text',
          rows: 3,
        },
        {
          name: 'noticeOfInterest',
          title: 'Rubrik till textrutan',
          description: 'Denna textrutan hittar du bredvid sidrubiken',
          type: 'string',
        },
        {
          name: 'noticeText',
          title: 'Brödtext till textrutan',
          description:
            'Texten syns under textrutans rubrik. Möjligt att lägga till länkar.',
          type: 'array',
          of: [
            {
              type: 'block',
              marks: {
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Länk',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        validation: (Rule) =>
                          Rule.required().uri({
                            allowRelative: true, // Allow relative links
                            relativeOnly: false, // Force only relative links
                            scheme: ['https', 'http', 'mailto'],
                          }),
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner på undersidan',
      description:
        'Nedan syns kommande händelser. Klicka på "Add item" för att skapa en ny händese. För att ta bort händelse klicka på de tre prickarna till höger om valt block.',
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
