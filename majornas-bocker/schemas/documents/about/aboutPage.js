import { GrHome } from "react-icons/gr";

export default {
  // Setup a 'document' type to house the page builder field

  name: "aboutPage",
  title: "About page",
  type: "document",
  icon: GrHome,
  fields: [
    {
      name: "pageBuilder",
      title: "Sectioner för om oss-sidan",
      type: "array",
      of: [
        { type: "aboutHero" }, // hero.js (same applies for the other types)
        { type: "aboutGallery" },
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
