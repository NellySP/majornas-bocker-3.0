import { BsInfoCircle } from 'react-icons/bs';

export default {
  // Setup a 'document' type to house the page builder field

  name: 'footer',
  title: 'Sidfot',
  type: 'document',
  icon: BsInfoCircle,
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'pageBuilder',
      title: 'Sektioner för sidfoten',
      description: 'Sidfoten är uppdelad i följande sektioner. Klicka för att redigera.',
      type: 'array',
      of: [
        { type: 'footerItem' }, // hero.js (same applies for the other types)
      ],
    },
  ],
};
