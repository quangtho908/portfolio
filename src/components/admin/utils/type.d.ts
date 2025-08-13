import type { I18nClient } from "@payloadcms/translations";
import type { Payload } from "payload";

type NavProps = {
  payload: Payload;
  i18n: I18nClient;
};

type MenuItemPattern = {
  label: string;
  slug: string;
};

type CollectionPattern = {
  label: string;
  items: MenuItemPattern[];
};

type MenuPattern = {
  [key: string]: CollectionPattern;
};
