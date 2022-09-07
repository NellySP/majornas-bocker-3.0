import { GrNavigate } from 'react-icons/gr';

export default {
  name: 'nav',
  title: 'Navigation',
  icon: GrNavigate,
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'id',
      type: 'slug',
      title: 'Id',
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'Navigation items',
      of: [{ type: 'navItem' }],
    },
  ],
};
