import Image from "next/image";
import type { Payload } from "payload";

import getImageUrl from "@/utils/getImageUrl";

export default async function Logo({ payload }: { payload: Payload }) {
  const logo = await payload.findGlobal({
    slug: "logo",
  });

  return (
    <>
      <Image
        src={getImageUrl(logo.darkLogo)}
        alt={"pension hohenau logo"}
        width={200}
        height={100}
        className="logo-dark"
      />
      <Image
        src={getImageUrl(logo.lightLogo)}
        alt={"pension hohenau logo"}
        width={200}
        height={100}
        className="logo-light"
      />
    </>
  );
}
