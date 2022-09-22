// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Global imports
import siteConfig from './documents/siteConfig';

// Home page imports
import home from './documents/home/home';
import hero from './documents/home/objects/hero';
import about from './documents/home/objects/about';
import calendar from './documents/home/objects/calendar';
import news from './documents/home/objects/news';

// About page imports
import aboutPage from './documents/about/aboutPage';
import aboutHero from './documents/about/objects/aboutHero';
import gallery from './documents/about/objects/gallery';

// News page imports
import newsPage from './documents/news/newsPage';
import newsHero from './documents/news/objects/newsHero';
import singleNews from './documents/news/objects/singleNews';

// Footer imports
import footer from './documents/footer/footer';
import footerItem from './documents/footer/objects/footerItem';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Calendar page Imports
import calendarPage from './documents/calendar/calendarPage';
import calendarPost from './documents/calendar/objects/calendarPost';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Your types here!

    // Navigation schemas
    siteConfig,

    // Home page schemas
    home,
    hero,
    calendar,
    about,
    news,

    // About us page schemas
    aboutPage,
    aboutHero,
    gallery,

    // Calendar page schemas
    calendarPage,
    calendarPost,

    // News page schemas

    // Footer schemas
    footer,
    footerItem,
    newsHero,
    newsPage,
    singleNews,
  ]),
});
