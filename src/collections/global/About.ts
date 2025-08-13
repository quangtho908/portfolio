import type { GlobalConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import HeroBanner from "@/collections/common/HeroBanner";
import {
  CoreValues,
  HistoryOfStory,
  OurAbout,
  OurFarm,
  StoryOfPensionHohenau,
} from "@/collections/fields/About";
import groups from "@/collections/group";

const About: GlobalConfig = {
  slug: "about",
  admin: {
    group: groups.pages,
  },
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero Banner",
          fields: [HeroBanner],
        },
        {
          label: "About Us",
          fields: [OurAbout],
        },
        {
          label: "History of Story",
          fields: [HistoryOfStory],
        },
        {
          label: "Our Farm",
          fields: [OurFarm],
        },
        {
          label: "Core Values",
          fields: [CoreValues],
        },
        {
          label: "Story of Pension Hohenau",
          fields: [StoryOfPensionHohenau],
        },
      ],
    },
  ],
};

export default About;
