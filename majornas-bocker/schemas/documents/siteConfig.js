import { AiOutlineSetting } from 'react-icons/ai';

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  icon: AiOutlineSetting,
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'seo',
      type: 'object',
      title: 'Sökordsoptimering',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Sidtitel',
          description:
            'Titeln på hemsidan, detta är titeln som syns på Googles sökresultat',
        },
        {
          name: 'description',
          type: 'string',
          title: 'Beskrivning av sidan',
          description:
            'Beskrivningen talar om för sökmotorer och andra vad sidan handlar om.',
        },
        {
          title: 'URL',
          name: 'url',
          type: 'url',
          description: 'URL-länken till hemsidan',
        },
        {
          name: 'socialImage',
          title: 'En URL-bild till sociala medier',
          description: 'Se till att bilddmåttet är 1200 x 630px',
          type: 'image',
          option: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'logotype',
      type: 'string',
      title: 'Logotyp',
    },
    {
      title: 'Navigation',
      name: 'nav',
      description: 'Välj sidor till toppmenyn',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'homePage' },
            { type: 'calendarPage' },
            { type: 'aboutPage' },
            { type: 'newsPage' },
          ],
        },
      ],
    },
  ],
};
