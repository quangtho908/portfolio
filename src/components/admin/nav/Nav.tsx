import { getTranslation } from "@payloadcms/translations";
import React from "react";

import LogoutButton from "@/components/admin/nav/LogoutButton";
import generateMenuPattern from "@/components/admin/utils/generateMenuPattern";
import type { MenuPattern, NavProps } from "@/components/admin/utils/type";

import GroupItem from "./GroupItem";
import NavItem from "./NavItem";

const Nav: React.FC<NavProps> = async (props: NavProps) => {
  const menuData: MenuPattern = generateMenuPattern(props);

  return (
    <div className="my-nav">
      {Object.entries(menuData).map(([group, collection]) => (
        <GroupItem key={group} label={collection.label}>
          {collection.items.map((item) => (
            <NavItem
              key={item.slug}
              label={getTranslation(item.label, props.i18n)}
              href={`/admin/${item.slug}`}
            />
          ))}
        </GroupItem>
      ))}
      <LogoutButton />
    </div>
  );
};

export default Nav;
