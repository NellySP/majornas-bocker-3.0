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
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL-ändelse',
      description: 'Ändelse för sidan som syns i webbläsarens adressfält',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'calendarHero',
      title: 'Generell info på sidan',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Sidrubrik',
          description: 'Tips: undvik långa rubriker',
          type: 'string',
        },
        {
          name: 'heroDescription',
          title: 'Ingress till sidan',
          description: 'Texten kommer att synas under sidrubriken',
          type: 'text',
          rows: 3,
        },
        {
          name: 'attendanceHeading',
          title: 'Rubrik till textrutan',
          description: 'Denna textrutan hittar du bredvid sidrubiken',
          type: 'string',
        },
        {
          name: 'attendanceText',
          title: 'Brödtext till textrutan',
          type: 'array',
          description: 'Texten syns under textrutans rubrik. Möjligt att lägga till länkar.',
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
                              scheme: ["https", "http", "mailto"],})
                        },
                      ]
                    },
                ]
              },
            }
          ]
        },
      ],
    },
    {
      name: 'pageBuilder',
      title: 'Kalender för saker som händer',
      description:
        "Nedan samlas alla event. Klicka 'Add Item' för att lägga till ett ny event. För att ta bort event tryck på de tre prickarna till höger om eventblocket.",
      type: 'array',
      of: [{ type: 'calendarPost' }],
    },
  ],
};
