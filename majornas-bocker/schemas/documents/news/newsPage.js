import { GrHome } from "react-icons/gr";

export default {
  // Setup a 'document' type to house the page builder field

  name: "newsPage",
  title: "News page",
  type: "document",
  icon: GrHome,
  fields: [
    {
      name: "pageBuilder",
      title: "Sectioner för nyhets-sidan",
      type: "array",
      of: [
        { type: "newsHero" }, // hero.js (same applies for the other types)
        { type: "singleNews" },
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
