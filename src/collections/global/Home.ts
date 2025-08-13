import type { GlobalConfig } from "payload";

import { anyone } from "@/collections/access/anyone";
import { authenticated } from "@/collections/access/authenticated";
import HeroBanner from "@/collections/common/HeroBanner";
import { CanIHelpYou, Projects, Services } from "@/collections/fields/Home";
import groups from "@/collections/group";

const Home: GlobalConfig = {
  slug: "home",
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.pages,
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
          label: "Services",
          fields: [Services],
        },
        {
          label: "Projects",
          fields: [Projects],
        },
        {
          label: "Can I Help You",
          fields: [CanIHelpYou],
        },
      ],
    },
  ],
};

export default Home;
