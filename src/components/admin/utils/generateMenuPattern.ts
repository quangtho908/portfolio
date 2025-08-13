import { getTranslation } from "@payloadcms/translations";
import type { CollectionSlug } from "payload";

import groups from "@/collections/group";

import type { MenuPattern, NavProps } from "./type";

export default function generateMenuPattern({
  payload,
  i18n,
}: NavProps): MenuPattern {
  const menuData: MenuPattern = {};
  // arrange item display
  (Object.keys(groups) as Array<keyof typeof groups>).forEach((group) => {
    const groupValue = groups[group];
    if (!groupValue) return;
    const label = getTranslation(groupValue, i18n);
    if (typeof label === "string") {
      menuData[label] = { label, items: [] };
    }
  });

  (Object.keys(payload.collections) as CollectionSlug[]).forEach(
    (collectionSlug) => {
      const collection = payload.collections[collectionSlug];
      if (collection.config.admin.hidden) return;
      const label = getTranslation(
        collection.config.admin.group || {
          en: "Collections",
          de: "Sammlungen",
        },
        i18n
      );
      const pattern = menuData[label] || { label, items: [] };
      pattern.items.push({
        label: getTranslation(collection.config.labels.plural, i18n),
        slug: `collections/${collectionSlug}`,
      });
      menuData[label] = pattern;
    }
  );

  payload.globals.config.forEach((global) => {
    const globalSlug = global.slug;
    const label = getTranslation(
      global.admin.group || {
        en: "Globals",
        de: "Globale",
      },
      i18n
    );
    const pattern = menuData[label] || { label, items: [] };
    pattern.items.push({
      label: getTranslation(global.label, i18n),
      slug: `globals/${globalSlug}`,
    });
    menuData[label] = pattern;
  });

  return menuData;
}
