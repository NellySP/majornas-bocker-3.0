// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Global imports
import navigation from "./documents/navigation/navigation";
import navItem from "./documents/navigation/objects/navItem";
import link from "./documents/navigation/objects/link";

// Home page imports
import home from "./documents/home/home";
import hero from "./documents/home/objects/hero";
import calendar from "./documents/home/objects/calendar";
import about from "./documents/home/objects/about";
import news from "./documents/home/objects/news";

// About page imports
import aboutPage from "./documents/about/aboutPage";
import aboutHero from "./documents/about/objects/aboutHero";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import aboutPage from "./documents/about/aboutPage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Your types here!

    // Navigation schemas
    navigation,
    navItem,
    link,

    // Home page schemas
    home,
    hero,
    calendar,
    about,
    news,

    // About us page schemas
    aboutPage,
    aboutHero,

    // Calendar page schemas

    // News page schemas
  ]),
});
