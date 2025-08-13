import Image from "next/image";
import type { Payload } from "payload";

import getImageUrl from "@/utils/getImageUrl";

export default async function BrandLabel({ payload }: { payload: Payload }) {
  const logo = await payload.findGlobal({
    slug: "logo",
  });

  return (
    <>
      <Image
        src={getImageUrl(logo.darkLabel)}
        alt={"pension hohenau logo"}
        width={24}
        height={24}
        className="logo-dark"
      />
      <Image
        src={getImageUrl(logo.lightLabel)}
        alt={"pension hohenau logo"}
        width={24}
        height={24}
        className="logo-light"
      />
    </>
  );
}
