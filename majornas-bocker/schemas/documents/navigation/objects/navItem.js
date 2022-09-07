import FiLink from 'react-icons/fi';

export default {
  name: 'navItem',
  title: 'NavItem',
  icon: FiLink,
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Link text',
      type: 'string',
    },
    {
      name: 'navItemUrl',
      title: 'Nav Item URL',
      type: 'link', // references link object
    },
  ],
  // We want to see a preview of the navItem in sanity studio
  preview: {
    select: {
      title: 'text',
      subtitle: 'navItemUrl.linkUrl',
    },
    prepare({ title, subtitle }) {
      //   console.log(subtitle);
      return {
        title,
        subtitle: `${subtitle}`,
      };
    },
  },
};
